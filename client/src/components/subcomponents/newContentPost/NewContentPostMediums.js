import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import YoutubeForm from './YoutubeForm';
import InstagramForm from './InstagramForm';
import TwitterForm from './TwitterForm';
import SnapchatForm from './SnapchatForm';

import { youtubeRemoveData, instagramRemoveData, twitterRemoveData, snapchatRemoveData } from '../../../actions'

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
            redirectToNextPage: false
        };
        this.onNextPage = this.onNextPage.bind(this);
        this.youtubeForm = this.youtubeForm.bind(this);
        this.instagramForm = this.instagramForm.bind(this);
        this.twitterForm = this.twitterForm.bind(this);
        this.snapchatForm = this.snapchatForm.bind(this);
    }

    componentWillMount() {
        // preserve history if user toggled between steps
        if (this.props.newContentPost.youtube && this.props.newContentPost.youtube.yt_UploadFrequency !== null) {
            this.setState({ showYouTubeForm: true })
        }

        if (this.props.newContentPost.instagram && this.props.newContentPost.instagram.ig_PostFrequency !== null) {
            this.setState({ showInstagramForm: true })
        }
        if (this.props.newContentPost.twitter && this.props.newContentPost.twitter.tw_PostFrequency !== null) {
            this.setState({ showTwitterForm: true })
        }

        if (this.props.newContentPost.snapchat && this.props.newContentPost.snapchat.sc_PostFrequency !== null) {
            this.setState({ showSnapchatForm: true })
        }
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

    onNextPage() {
        // check that inputs are valid
        if (!this.state.showYouTubeForm && !this.state.showInstagramForm && !this.state.showTwitterForm && !this.state.showSnapchatForm) {
            return alert('Error: You must select at least one medium before proceeding!')
        }

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


        // clear out values if checkbox is not selected at point of submitting
        if (!this.state.showYouTubeForm) {
            this.props.dispatch(youtubeRemoveData());
        }

        if (!this.state.showInstagramForm) {
            this.props.dispatch(instagramRemoveData());
        }

        if (!this.state.showTwitterForm) {
            this.props.dispatch(twitterRemoveData());
        }

        if (!this.state.showSnapchatForm) {
            this.props.dispatch(snapchatRemoveData());
        }

        // prevent valid entry then becomes invalid. e.prevent.default
        console.log(this.state);
        console.log(this.props.newContentPost);

        console.log(Object.keys(this.props.newContentPost).length);


        //temp below
        console.log('yes');
        this.setState({redirectToNextPage: true})

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
        if (this.state.redirectToNextPage) {
            return <Redirect push to="/newContentPost/images" />;
        }

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
                            <Checkbox
                                inline
                                name="YouTube"
                                defaultChecked={this.state.showYouTubeForm}
                                onClick={() => this.setState({ showYouTubeForm: !this.state.showYouTubeForm })}
                                >
                                YouTube
                            </Checkbox>
                            <Checkbox
                                inline
                                name="Instagram"
                                defaultChecked={this.state.showInstagramForm}
                                onClick={() => this.setState({ showInstagramForm: !this.state.showInstagramForm })}
                                >
                                Instagram
                            </Checkbox>
                            <Checkbox
                                inline
                                name="Twitter"
                                defaultChecked={this.state.showTwitterForm}
                                onClick={() => this.setState({ showTwitterForm: !this.state.showTwitterForm })}
                                >
                                Twitter
                            </Checkbox>
                            <Checkbox
                                inline
                                name="Snapchat"
                                defaultChecked={this.state.showSnapchatForm}
                                onClick={() => this.setState({ showSnapchatForm: !this.state.showSnapchatForm })}
                                >
                                Snapchat
                            </Checkbox>
                        </FormGroup>
                    </FormGroup>
                </Form>

                {/* Import social media specific forms */}
                {this.youtubeForm()}
                {this.instagramForm()}
                {this.twitterForm()}
                {this.snapchatForm()}

                <Button bsStyle="success" onClick={this.onNextPage}>
                    Proceed to optional images (Step 3/4)
                </Button>

                <Button id="contentMediumsGoBack" bsStyle="warning">
                    <Link to="/newContentPost">
                        Back to previous page (Step 1/4)
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