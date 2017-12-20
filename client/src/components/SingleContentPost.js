import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleContentPost, privateMessageIDsToProps } from '../actions/';
import { fetchUserID } from '../actions/auth';

// import ContentPostListAdSpace from './subcomponents/contentCreatorsList/ContentPostListAdSpace';
import ContactForm from './subcomponents/singleContentPost/singleContentPostContactForm';
import singleContentPostResult from './subcomponents/singleContentPost/singleContentPostResult';

// on load check if a conversation already exists. If so, then hide button and show conversation
// when message expanded, dim button
//===============================================================================================//

// get posterID. needed before submitting PM. that data will then be relayed to profile page

class SingleContentPost extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            showContactForm: false,
            contentPost: [],
            posterID: null,
            userID: null
        };
        this.showActionButton = this.showActionButton.bind(this);
        this.contactUser = this.contactUser.bind(this);
    }


    componentWillMount() {
        // get current url and extract id number. Query database for this primary key and return all relevant information
        let postID = this.props.location.pathname.match(/\d+/)[0];

        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then((data) => {
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    this.setState({ contentPost: data });
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
                    return this.props.dispatch(privateMessageIDsToProps(postID, posterID, userID, postSummary, posterUsername))
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

    showActionButton() {
        if (this.state.contentPost[0]['is_author']) {
            return (
                <Button id="editPost" bsStyle="info">
                    <Link to={"/contentPost/edit/id:" + this.state.contentPost[0]['content_post_id']}>
                        Edit / Delete post
                    </Link>
                </Button>
            )
        }
        return (
            <Button onClick={() => this.setState({ showContactForm: !this.state.showContactForm})} bsStyle="success">
                Interested in partnering with me? Send me a message
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
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        return (
            <div>
                <div className="singleContentPostContainer">

                    {singleContentPostResult(this.state.contentPost)}

                    <Button id="goBack" bsStyle="warning">
                        <Link to="/ContentCreatorsList">
                            Back to results
                        </Link>
                    </Button>
                    &nbsp;&nbsp;&nbsp;

                    {this.showActionButton()}
                    
                </div>

                {this.contactUser()}

                {/*<ContentPostListAdSpace/>*/}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SingleContentPost);


function mapStateToProps(state) {
    return {
        privateMessage: state.privateMessage.privateMessageIDs
    };
}