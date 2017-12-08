import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
// import {testNewTaskValidity} from "../../stateFunctions";
import { Link, Redirect } from 'react-router-dom';

import { isLoggedIn, saveNewContentPost } from '../../../actions';
//===============================================================================================//

class NewContentPostFinalReview extends Component {
    constructor() {
        super();
        this.state = {

            redirectToContentCreatorsList: false
        };
        this.onSubmitNewContentPost = this.onSubmitNewContentPost.bind(this);
        this.youtubeData = this.youtubeData.bind(this);
        this.instagramData = this.instagramData.bind(this);
        this.twitterData = this.twitterData.bind(this);
        this.snapchatData = this.snapchatData.bind(this);
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        if (result !== 'OK') {
                            alert('You are not logged in. Please login or register before making a new listing.');
                            return this.setState({ redirectToContentCreatorsList: true });
                        }
                        return this.setState({ checkingLogin: false });
                    });
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }


    componentDidMount() {
        // Needs work.... Run function for unit test. Ensure information to be submitted is accurate. Currently always proceeds regardless. Fix
        // testNewTaskValidity(this.props.newContentPost)
    }

    youtubeData () {
        if (this.props.newContentPost.youtube) {
            return (
                <div>
                    <h3>Youtube:</h3>
                    <ul>
                        <li>Upload frequency: {this.props.newContentPost.youtube.yt_UploadFrequency}</li>
                        <li>Typical video length: {this.props.newContentPost.youtube.yt_VideoLength}</li>
                        <li>Subscriber count: {this.props.newContentPost.youtube.yt_SubCount}</li>
                        <li>Total Channel views: {this.props.newContentPost.youtube.yt_ViewCount}</li>
                    </ul>
                </div>
            )
        }
    }

    instagramData () {
        if (this.props.newContentPost.instagram) {
            return (
                <div>
                    <h3>Instagram:</h3>
                    <ul>
                        <li>Post frequency: {this.props.newContentPost.instagram.ig_PostFrequency}</li>
                        <li>Followers: {this.props.newContentPost.instagram.ig_Followers}</li>
                        <li>Typical likes per post: {this.props.newContentPost.instagram.ig_Likes}</li>
                        <li>Typical comments per post: {this.props.newContentPost.instagram.ig_Comments}</li>
                    </ul>
                </div>
            )
        }
    }

    twitterData () {
        if (this.props.newContentPost.twitter) {
            return (
                <div>
                    <h3>Twitter:</h3>
                    <ul>
                        <li>Post frequency: {this.props.newContentPost.twitter.tw_PostFrequency}</li>
                        <li>Followers: {this.props.newContentPost.twitter.tw_Followers}</li>
                        <li>Typical likes per post: {this.props.newContentPost.twitter.tw_PostLikes}</li>
                        <li>Typical comments per post: {this.props.newContentPost.twitter.tw_Comments}</li>
                    </ul>
                </div>
            )
        }
    }

    snapchatData () {
        if (this.props.newContentPost.snapchat) {
            return (
                <div>
                    <h3>Snapchat:</h3>
                    <ul>
                        <li>Post frequency: {this.props.newContentPost.snapchat.sc_PostFrequency}</li>
                        <li>Followers: {this.props.newContentPost.snapchat.sc_Followers}</li>
                        <li>Typical story opens: {this.props.newContentPost.snapchat.sc_StoryOpens}</li>
                    </ul>
                </div>
            )
        }
    }

    onSubmitNewContentPost() {
        (async () => {
            try {
                return this.props.dispatch(saveNewContentPost(this.props.newContentPost))
                .then((result) => {
                    if (result === 'OK') {
                        alert('Your post was successfully submitted!');
                        return this.setState({redirectToContentCreatorsList: true})
                    }
                    return alert('Error: Your post was not submitted. Please try again and let us know if this problem persists.');
                })
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    render() {
        if (this.state.redirectToContentCreatorsList) {
            return <Redirect push to="/contentCreatorsList" />;
        }
        return (
            <div className="newContentPostContainer">
                <h1>Review before submitting</h1>

                <div className="contentMediumsPropsInfo">
                    <h3>Inputs thus far:</h3>
                    <ul>
                        <li>User location: {this.props.newContentPost.userLocation}</li>
                        <li>Content summary: {this.props.newContentPost.contentSummary}</li>
                        <li>Content description: {this.props.newContentPost.contentDescription}</li>
                        <li>Content ideal match: {this.props.newContentPost.contentIdealMatch}</li>
                        <li>Content tags: {this.props.newContentPost.contentTags}</li>
                        {/*<li>Content categories: {this.props.newContentPost.contentCategories.join(', ')}</li>*/}
                    </ul>
                </div>

                <hr/>

                {this.youtubeData()}
                {this.instagramData()}
                {this.twitterData()}
                {this.snapchatData()}

                <img name="temp1" width="400px" height="300px" alt="temp1" src="https://images.unsplash.com/photo-1483383490964-8335c18b6666?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                <img name="temp2" width="400px" height="300px" alt="temp2" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />

                <Button bsStyle="success"
                        onClick={this.onSubmitNewContentPost}
                >
                    Submit!
                </Button>


                <Button id="contentMediumsGoBack" bsStyle="warning">
                    <Link to="/newContentPost/images">
                        Back to previous page (Step 3/4)
                    </Link>
                </Button>

            </div>
        );
    }
}

export default connect(mapStateToProps)(NewContentPostFinalReview);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}
