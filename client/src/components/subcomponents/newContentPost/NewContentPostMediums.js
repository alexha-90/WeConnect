import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import { validateMediums} from './validateMediums';
import { youtubeForm, instagramForm, twitterForm, snapchatForm } from '../../helper_functions';

// uncomment categories check later. In for testing
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
    }

    componentWillMount() {
        setTimeout(() => {
            if (!this.props.auth.isLoggedIn) {
                alert('You are not logged in. Please login or register before making a new listing.');
                return this.setState({ redirectToContentCreatorsList: true });
            }
            return this.setState({ checkingLogin: false });
        },500);

        // preserve show form history if user toggled between steps
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

    onNextPage() {
        if (validateMediums(this.state, this.props)) {
            this.setState({redirectToNextPage: true})
        }
    }

    render() {
        console.log(this.props.newContentPost);
        if (this.state.redirectToNextPage) {
            return <Redirect push to="/newContentPost/images" />;
        }

        return (
            <div>
                <div id="stepComponent">
                    <Steps labelPlacement="vertical" current={1}>
                        <Step title="Description" />
                        <Step title="Mediums" />
                        <Step title="Images" />
                        <Step title="Review" />
                        <Step title="Submit!" />
                    </Steps>
                </div>

                <div className="newContentPostContainer">

                    <div className="contentMediumsPropsInfo">
                        <h1>Inputs thus far:</h1>
                        <ul>
                            <li><span>User location:</span> {this.props.newContentPost.userLocation}</li>
                            <li><span>Content summary:</span> {this.props.newContentPost.contentSummary}</li>
                            <li><span>Content description:</span> {this.props.newContentPost.contentDescription}</li>
                            <li><span>Content ideal match:</span> {this.props.newContentPost.contentIdealMatch}</li>
                            <li><span>Content tags:</span> {this.props.newContentPost.contentTags}</li>
                            {/*<li><span>Content categories:</span> {this.props.newContentPost.contentCategories.join(', ')}</li>*/}
                        </ul>
                    </div>
                    <hr/>
                    <Form>
                        <FormGroup>
                            <h1>Marketable medium(s):</h1>

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
                    {youtubeForm(this.state.showYouTubeForm)}
                    {instagramForm(this.state.showInstagramForm)}
                    {twitterForm(this.state.showTwitterForm)}
                    {snapchatForm(this.state.showSnapchatForm)}

                    <Button bsStyle="warning">
                        <Link to="/newContentPost">
                            Back to previous page (Step 1/5)
                        </Link>
                    </Button>

                    <Button id="contentMediumsGoBack" bsStyle="success" onClick={this.onNextPage}>
                        Proceed to optional images (Step 3/5)
                    </Button>

                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(NewContentPostMediums);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        auth: state.auth.auth
    };
}