import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { privateMessageIDsToProps } from '../../actions/profile';
import { fetchSingleContentPost } from '../../actions/contentPosts';
import { fetchUserID } from '../../actions/auth';
import ContactForm from './SinglePostContactForm';
import singleContentPostResult from './SinglePostResult';
import ImageLightbox from './ImageLightbox';
import { loadingSpinner } from '../helper_functions';
import { Textfit } from 'react-textfit';

// on load check if a conversation already exists. If so, then hide button and show conversation
// when message expanded, dim button
//===============================================================================================//
class SingleContentPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingComponent: true,
            showContactForm: false,
            contentPost: [],
            posterID: null,
            userID: null,
            lastEdited: null,
            redirectToContentCreatorsList: false,
        };
        this.showActionButton = this.showActionButton.bind(this);
        this.contactUser = this.contactUser.bind(this);
        this.lastEdited = this.lastEdited.bind(this);
    }


    componentWillMount() {
        // get current url and extract id number. Query database for this primary key and return all relevant information
        let postID = this.props.location.pathname.match(/\d+/)[0];

        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then((data) => {
                    console.log('adsasdad');
                    console.log(this.props.contentPost);
                    if (data === 'error') {
                        alert('Unable to locate this entry. You are now being redirected to the list of posts.');
                        setTimeout(() => {
                            return this.setState({ redirectToContentCreatorsList: true });
                        }, 500);

                        // return this.setState({ redirectToContentCreatorsList: true });
                    }
                    this.setState({ contentPost: data, lastEdited: data[0]['last_edited'] });
                })
                .then(() => {
                    return this.props.dispatch(fetchUserID());
                })
                .then((userID) => {
                    if (userID === 'error') {
                        return console.log('User is not logged in. Will not be able to message poster');
                    }
                    const posterID = this.state.contentPost[0]['poster_id'];
                    const postSummary = this.state.contentPost[0]['content_summary'];
                    const posterUsername = this.state.contentPost[0]['username'];
                    this.props.dispatch(privateMessageIDsToProps(postID, posterID, userID, postSummary, posterUsername))
                })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            return this.setState({loadingComponent: false})
        }, 500);
    }

    lastEdited() {
        if (this.state.lastEdited) {
            return <div>Last edited: {this.state.lastEdited}</div>
        }
    }

    showActionButton() {
        // console.log(this.state.contentPost);
        if (this.state.contentPost[0]['is_author']) {
            return (
                <Button id="editButton" bsStyle="info">
                    <Link to={"/contentPost/edit/id:" + this.state.contentPost[0]['content_post_id']}>
                        Edit / Delete post
                    </Link>
                </Button>
            )
        }
        return (
            <Button id="messageButton" onClick={() => this.setState({ showContactForm: !this.state.showContactForm})} bsStyle="success">
                Interested in partnering with me?<br/>Send me a message!
            </Button>
        )
    }

    contactUser() {
        if (this.state.showContactForm) {
            if (!this.props.privateMessage.userID) {
                return alert('You are not logged in. You must be logged in before contacting a user.');
            }
            return <ContactForm />
        }
    }

    render() {
        if (this.state.redirectToContentCreatorsList) {
            return <Redirect push to="/contentCreatorsList"/>
        }
        if (this.state.loadingComponent) {
            return loadingSpinner();
        }

        return (
            <div className="singlePostBigContainer">
                <br/>
                <Link id="goBackLink" to="/ContentCreatorsList">
                    {'<-- '}Back to results
                </Link>

                <div className="singleContentPostContainer">
                    <div className="mainContainer">
                        <div id="imageLightbox">
                            <ImageLightbox {...this.props}/>
                        </div>
                        <div className="postResult">
                            {singleContentPostResult(this.state.contentPost)}
                        </div>
                    </div>

                    <div className="infoContainer">
                        <div id="profileBlock">
                            <img alt="profilePic" src="https://i.imgur.com/FHLVEDd.png"/>
                            <span>
                              <Textfit mode="single">
                                {this.state.contentPost[0]['username']}
                              </Textfit>
                            </span>
                        </div>
                        <h5>
                            Location: {this.state.contentPost[0]['poster_location']}
                            <br/>
                            {/*Share post:*/}
                        </h5>
                        {this.showActionButton()}
                        {this.contactUser()}
                        {/*<ContentPostListAdSpace/>*/}
                        <div style={{backgroundColor: "#e6e6e6"}}>
                            Listing made: {this.state.contentPost[0]['submitted_timestamp']}
                            {this.lastEdited()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SingleContentPost);


function mapStateToProps(state) {
    return {
        contentPost: state.contentPosts.contentPostDetails,
        privateMessage: state.privateMessage.privateMessageIDs
    };
}