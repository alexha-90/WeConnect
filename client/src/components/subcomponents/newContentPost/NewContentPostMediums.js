import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import YoutubeForm from './YoutubeForm';
import InstagramForm from './InstagramForm';
import TwitterForm from './TwitterForm';
import SnapchatForm from './SnapchatForm';
//
// import { isLoggedIn, newContentPostToProps } from '../actions';
////

//===============================================================================================//

class NewContentPostMediums extends Component {
    constructor() {
        super();
        this.state = {
            showYouTubeForm: false,
            showInstagramForm: false,
            showTwitterForm: false,
            showSnapchatForm: false,
            contentMedium: '',
        };
        this.onReviewNewContentPost = this.onReviewNewContentPost.bind(this);
        this.youtubeForm = this.youtubeForm.bind(this);
        this.instagramForm = this.instagramForm.bind(this);
        this.twitterForm = this.twitterForm.bind(this);
        this.snapchatForm = this.snapchatForm.bind(this);
    }

    youtubeForm() {
        if (!this.state.showYouTubeForm) {
            // retrieve data before uncheck, if available
            return;
        }
        return <YoutubeForm />
    }

    instagramForm() {
        if (!this.state.showInstagramForm) {
            // retrieve data before uncheck, if available
            return;
        }
        return <InstagramForm />
    }

    twitterForm() {
        if (!this.state.showTwitterForm) {
            // retrieve data before uncheck, if available
            return;
        }
        return <TwitterForm />
    }

    snapchatForm() {
        if (!this.state.showSnapchatForm) {
            // retrieve data before uncheck, if available
            return;
        }
        return <SnapchatForm />
    }

    onReviewNewContentPost() {
        // if (!this.state.showYouTubeForm) { clear out all youtube values from props}
        // prevent valid entry then becomes invalid. e.prevent.default
        console.log(this.state);
        console.log(this.props.newContentPost);
        if (this.state.showYouTubeForm && !this.props.newContentPost.youtube) {
            return alert('Error: Please make sure to fill out all details for the YouTube form or deselect the option.')
        }

        if (this.state.showInstagramForm && !this.props.newContentPost.instagram) {
            return alert('Error: Please make sure to fill out all details for the Instagram form or deselect the option.')
        }

        if (this.state.showTwitterForm && !this.props.newContentPost.twitter) {
            return alert('Error: Please make sure to fill out all details for the Twitter form or deselect the option.')
        }

        if (this.state.showSnapchatForm && !this.props.newContentPost.snapchat) {
            return alert('Error: Please make sure to fill out all details for the Snapchat form or deselect the option.')
        }

        console.log('yes');
        // // validation for later. Check that all contentX fields and one entry are filled in.
        // if (!this.state.contentSummary || !this.state.contentDescription || !this.state.contentMedium) {
        //     return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
        // }
        //
        //
        // (async () => {
        //     try {
        //         this.props.dispatch(newContentPostToProps({
        //
        //         }));
        //         return await this.setState({redirectToReviewNewContentPost: true});
        //
        //     } catch (err) {
        //         return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
        //     }
        // })();
    }

    render() {
        console.log(this.props.newContentPost);

        return (
            <div className="newContentPostContainer">

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
                <Form>
                    <FormGroup>
                        <ControlLabel>Marketable medium(s)</ControlLabel>

                        <FormGroup>
                            <Checkbox inline name="YouTube" onClick={() => this.setState({ showYouTubeForm: !this.state.showYouTubeForm })}>
                                YouTube
                            </Checkbox>
                            <Checkbox inline name="Instagram" onClick={() => this.setState({ showInstagramForm: !this.state.showInstagramForm })}>
                                Instagram
                            </Checkbox>
                            <Checkbox inline name="Twitter" onClick={() => this.setState({ showTwitterForm: !this.state.showTwitterForm })}>
                                Twitter
                            </Checkbox>
                            <Checkbox inline name="Snapchat" onClick={() => this.setState({ showSnapchatForm: !this.state.showSnapchatForm })}>
                                Snapchat
                            </Checkbox>
                        </FormGroup>
                    </FormGroup>
                </Form>

                {/*Import specific forms*/}
                {this.youtubeForm()}
                {this.instagramForm()}
                {this.twitterForm()}
                {this.snapchatForm()}

                <Button bsStyle="success" onClick={this.onReviewNewContentPost}>
                    Proceed to final review
                </Button>

                <Button id="contentMediumsGoBack" bsStyle="warning" onClick={() => alert('NOTE: You will need to reselect categories. Sorry for the inconvenience!')}>
                    <Link to="/newContentPost">
                        Back to previous page
                    </Link>
                </Button>

            </div>
        )
    }
}



export default connect(mapStateToProps)(NewContentPostMediums);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}