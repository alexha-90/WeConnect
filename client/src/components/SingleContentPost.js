import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleContentPost } from '../actions/';
import { isLoggedIn, fetchUserID } from '../actions/auth';

// import ContentPostListAdSpace from './subcomponents/contentCreatorsList/ContentPostListAdSpace';
import ContactForm from './subcomponents/singleContentPost/singleContentPostContactForm';
import singleContentPostResult from './subcomponents/singleContentPost/singleContentPostResult';

// upload images. onclick expand
// when message expanded, dim button
//===============================================================================================//

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
        this.showProperButtons = this.showProperButtons.bind(this);
        this.contactUser = this.contactUser.bind(this);
    }


    componentWillMount() {
        // (async () => {
        //     try {
        //         return this.props.dispatch(fetchIdNumbers())
        //             .then((data) => {
        //                 if (data === 'error') {
        //                     return alert ('Unable to retrieve user information from the database. Please try again or notify us if the issue persists.');
        //                 }
        //                 return this.setState({ userID: data });
        //             })
        //     } catch (err) {
        //         console.log(err);
        //         return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
        //     }
        // })();


        // need to make a rule for when random characters entered after /contentPost/....


        let postID = this.props.location.pathname.match(/\d+/)[0];

        // get current url and extract id number. Query database for this primary key and return all relevant information
        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then((data) => {
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    this.setState({ posterID: data[0]['user_id'], contentPost: data });
                })
                .then(() => {
                    return this.props.dispatch(fetchUserID());
                })
                .then((num) => {
                    if (num === 'error') {
                        return console.log('User is not logged in. Will not be able to message poster');
                    }
                    return this.setState({ userID: num })
                })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state);
            return this.setState({loadingComponent: false})
        }, 500);
    }

    showProperButtons() {
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
        // check if authenticated. If not, prompt login error
        // return alert('You are not logged in. You must be logged in before contacting a user.');
        if (this.state.showContactForm) {
            return <ContactForm />
        }
    }


    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        console.log(this.state);

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

                    {this.showProperButtons()}
                    
                </div>

                {this.contactUser()}

                {/*<ContentPostListAdSpace/>*/}
            </div>
        )
    }
}

export default connect(null)(SingleContentPost);