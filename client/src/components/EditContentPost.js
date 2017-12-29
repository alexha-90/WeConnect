import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';

import YoutubeForm from './subcomponents/newContentPost/YoutubeForm';
import InstagramForm from './subcomponents/newContentPost/InstagramForm';
import TwitterForm from './subcomponents/newContentPost/TwitterForm';
import SnapchatForm from './subcomponents/newContentPost/SnapchatForm';
import { fetchSingleContentPost, editPostDetailsToProps, updateSingleContentPost } from '../actions/';
import { youtubeRemoveData, instagramRemoveData, twitterRemoveData, snapchatRemoveData } from '../actions/newContentPost'

// editSingleContentPost  ^^ import
// need to validaet mediums like did in newPost....
//===============================================================================================//


let categoriesArr = [];

class EditContentPost extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            redirectToPost: false,
            checkingLogin: true,
            categoryListOpen: true,
            contentPostID: '',
            userLocation: '',
            contentSummary: '',
            contentDescription: '',
            contentIdealMatch: '',
            contentTags: '',
            contentCategories: [],
            showYouTubeForm: false,
            showInstagramForm: false,
            showTwitterForm: false,
            showSnapchatForm: false,
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.openCategoryIndicator = this.openCategoryIndicator.bind(this);
        this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
        this.youtubeForm = this.youtubeForm.bind(this);
        this.instagramForm = this.instagramForm.bind(this);
        this.twitterForm = this.twitterForm.bind(this);
        this.snapchatForm = this.snapchatForm.bind(this);
        this.onUpdatePost = this.onUpdatePost.bind(this);
    }


    componentWillMount() {
        setTimeout(() => {
            if (!this.props.auth.isLoggedIn) {
                alert('You are not logged in. If you are the author of this post, please login before proceeding.');
                return this.setState({ redirectToPost: true });
            }
            return this.setState({ checkingLogin: false });
        },500);

        // NOTE: need to make a rule for when random characters entered after /contentPost/....

        // get current url and extract id number. Query database for this primary key and return all relevant information
        let postID = this.props.location.pathname.match(/\d+/)[0];
        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then((data) => {
                    console.log(data);
                    this.setState( {contentPostID: data[0]['content_post_id']} );
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    if (!data[0]['is_author']) {
                        alert ('Sorry! You are not authorized to edit this post.');
                        setTimeout(() => {
                            return this.setState({redirectToPost: true})
                        }, 250);
                    }

                    this.setState({
                        userLocation: data[0]['poster_location'],
                        contentSummary: data[0]['content_summary'],
                        contentDescription: data[0]['content_description'],
                        contentIdealMatch: data[0]['content_ideal_match'],
                        contentTags: data[0]['content_tags'],
                        contentCategories: data[0]['content_categories']
                    });
                    return data;
                })
                .then((data) => {
                    return this.props.dispatch(editPostDetailsToProps(data));
                })
                .then(() => {
                    if (this.props.contentPost['yt_upload_frequency']) {
                        this.setState({ showYouTubeForm: true })
                    }

                    if (this.props.contentPost['ig_post_frequency']) {
                        this.setState({ showInstagramForm: true })
                    }
                    if (this.props.contentPost['tw_post_frequency']) {
                        this.setState({ showTwitterForm: true })
                    }

                    if (this.props.contentPost['sc_post_frequency']) {
                        this.setState({ showSnapchatForm: true })
                    }
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
        }, 1000);
    }



    handleTextChange(event) {
        switch (event.target.name) {
            case 'userLocation': {
                return this.setState({userLocation: event.target.value});
            }
            case 'contentSummary': {
                return this.setState({contentSummary: event.target.value});
            }
            case 'contentDescription': {
                return this.setState({contentDescription: event.target.value});
            }
            case 'contentIdealMatch': {
                return this.setState({contentIdealMatch: event.target.value});
            }
            case 'contentTags': {
                return this.setState({contentTags: event.target.value});
            }
            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    handleCategoryToggle(event) {
        if (event.target.checked) {
            return categoriesArr.push(event.target.name);
        }
    }

    openCategoryIndicator() {
        if (this.state.categoryListOpen) {
            return '(-)'
        }
        if (!this.state.categoryListOpen) {
            return '(+)'
        }
    }


    youtubeForm() {
        if (!this.state.showYouTubeForm) {
            return;
        }
        return <YoutubeForm />
    }

    instagramForm() {
        if (!this.state.showInstagramForm) {
            return;
        }
        return <InstagramForm />
    }

    twitterForm() {
        if (!this.state.showTwitterForm) {
            return;
        }
        return <TwitterForm />
    }

    snapchatForm() {
        if (!this.state.showSnapchatForm) {
            return;
        }
        return <SnapchatForm />
    }



    onUpdatePost () {
        // refactor later
        // check that inputs are valid

        // if form is open and has neither contentPost or newPost data, prompt error.
        if (this.state.showYouTubeForm && (!this.props.contentPost['yt_upload_frequency'] && !this.props.newContentPost.youtube)) {
            return alert('Error: Please make sure to fill out all details for the YouTube form or deselect the option.')
        }

        if (this.state.showInstagramForm && (!this.props.contentPost['ig_post_frequency'] && !this.props.newContentPost.instagram)) {
            return alert('Error: Please make sure to fill out all details for the Instagram form or deselect the option.')
        }

        if (this.state.showTwitterForm && (!this.props.contentPost['tw_post_frequency'] && !this.props.newContentPost.twitter)) {
            return alert('Error: Please make sure to fill out all details for the Twitter form or deselect the option.')
        }

        if (this.state.showSnapchatForm && (!this.props.contentPost['sc_post_frequency'] && !this.props.newContentPost.snapchat)) {
            return alert('Error: Please make sure to fill out all details for the Snapchat form or deselect the option.')
        }

        // clear out values if checkbox is not selected at point of submission
        // NOTE: if user selected a new value for existing medium, the changes will be reflected on newContentPost
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

        setTimeout(() => {

            // youtube_yt_upload_freq = this.props.newContentPost.youtube
            // if this.props.contentPost.youtube and not this.props.newContentPost.youtube.length
            //      then editedPost should get information from this.props.contentPost instead

            if (this.props.contentPost.yt_UploadFrequency && !this.props.newContentPost.youtube) {
                console.log(this.props.newContentPost.youtube.length);
            }

            // treat updates as a new post. Unchanged mediums data are ignored
            let editedPost = {
                contentPostID: this.state.contentPostID,
                userLocation: this.state.userLocation,
                contentSummary: this.state.contentSummary,
                contentDescription: this.state.contentDescription,
                contentIdealMatch: this.state.contentIdealMatch,
                contentTags: this.state.contentTags,
                contentCategories: this.state.contentCategories,
                youtube: {
                    yt_UploadFrequency: this.props.newContentPost.youtube.yt_UploadFrequency,
                    yt_VideoLength: this.props.newContentPost.youtube.yt_VideoLength,
                    yt_SubCount: this.props.newContentPost.youtube.yt_SubCount,
                    yt_ViewCount: this.props.newContentPost.youtube.yt_ViewCount
                },
                instagram: {
                    ig_PostFrequency: this.props.newContentPost.instagram.ig_PostFrequency,
                    ig_Followers: this.props.newContentPost.instagram.ig_Followers,
                    ig_Likes: this.props.newContentPost.instagram.ig_Likes,
                    ig_Comments: this.props.newContentPost.instagram.ig_Comments
                },
                twitter: {
                    tw_PostFrequency: this.props.newContentPost.twitter.tw_PostFrequency,
                    tw_Followers: this.props.newContentPost.twitter.tw_Followers,
                    tw_PostLikes: this.props.newContentPost.twitter.tw_PostLikes,
                    tw_Comments: this.props.newContentPost.twitter.tw_Comments,
                },
                snapchat: {
                    sc_PostFrequency: this.props.newContentPost.snapchat.sc_PostFrequency,
                    sc_Followers: this.props.newContentPost.snapchat.sc_Followers,
                    sc_StoryOpens: this.props.newContentPost.snapchat.sc_StoryOpens
                }
            };
            this.props.dispatch(updateSingleContentPost(editedPost));
        }, 200);
    }



    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        if (this.state.redirectToPost) {
            return <Redirect push to={"/contentPost/view/id:" + this.state.contentPostID}/>
        }

        return (
            <div className="newContentPostContainer">
                <h1>Edit post:</h1>
                    <Form>
                        <FieldGroup
                            label="Location"
                            id="userLocation"
                            type="text"
                            name="userLocation"
                            placeholder="Where do you live? Please list your city, country, and other relevant information. DO NOT ENTER YOUR FULL ADDRESS."
                            maxLength="100"
                            value={this.state.userLocation}
                            onChange={this.handleTextChange}
                        />
                        <FieldGroup
                            label="Summary"
                            id="contentSummary"
                            type="text"
                            name="contentSummary"
                            placeholder="Provide a brief summary about your content (100 characters max)"
                            maxLength="100"
                            value={this.state.contentSummary}
                            onChange={this.handleTextChange}
                        />
                        <FormGroup>
                            <ControlLabel>Full description</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                name="contentDescription"
                                onChange={this.handleTextChange}
                                value={this.state.contentDescription}
                                style={{minHeight: "60px"}}
                                placeholder="Describe your content in more detail. Examples: target audience, demographics, previous partnerships, etc"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Ideal match</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                name="contentIdealMatch"
                                onChange={this.handleTextChange}
                                value={this.state.contentIdealMatch}
                                style={{minHeight: "60px"}}
                                placeholder="Tell us what your ideal match would be (pay rate, frequency, endorsement gifts, ad placement)"
                            />
                        </FormGroup>
                        <FieldGroup
                            label="Tags"
                            id="contentTags"
                            type="text"
                            name="contentTags"
                            placeholder="Enter some keywords that describe your content (separate each item with a comma)"
                            maxLength="100"
                            value={this.state.contentTags}
                            onChange={this.handleTextChange}
                        />
                        <FormGroup>
                        <span onClick={() => this.setState({ categoryListOpen: !this.state.categoryListOpen })}>
                            <ControlLabel>{this.openCategoryIndicator()} Associated categories</ControlLabel>
                        </span>
                            <br />
                            <Collapse in={this.state.categoryListOpen}>
                                <Table onChange={this.handleCategoryToggle} striped bordered id="categoryTable">
                                    <tbody>
                                    <tr>
                                        <td><Checkbox defaultChecked={true} name="Action/Adventure">Action/Adventure</Checkbox></td>
                                        <td><Checkbox name="Anime/Animation">Anime/Animation</Checkbox></td>
                                        <td><Checkbox name="Autos & Vehicles">Autos & Vehicles</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Classics">Classics</Checkbox></td>
                                        <td><Checkbox name="Comedy">Comedy</Checkbox></td>
                                        <td><Checkbox name="Documentary">Documentary</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Drama">Drama</Checkbox></td>
                                        <td><Checkbox name="Education">Education</Checkbox></td>
                                        <td><Checkbox name="Entertainment">Entertainment</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Family">Family</Checkbox></td>
                                        <td><Checkbox name="Film & Animation">Film & Animation</Checkbox></td>
                                        <td><Checkbox name="Foreign">Foreign</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Gaming">Gaming</Checkbox></td>
                                        <td><Checkbox name="Horror">Horror</Checkbox></td>
                                        <td><Checkbox name="How-to & Style">How-to & Style</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Movies">Movies</Checkbox></td>
                                        <td><Checkbox name="Music">Music</Checkbox></td>
                                        <td><Checkbox name="News & Politics">News & Politics</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Nonprofits & Activism">Nonprofits & Activism</Checkbox></td>
                                        <td><Checkbox name="People & Blog">People & Blogs</Checkbox></td>
                                        <td><Checkbox name="Pets & Animals">Pets & Animals</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Sci-Fi/Fantasy">Sci-Fi/Fantasy</Checkbox></td>
                                        <td><Checkbox name="Science & Technology">Science & Technology</Checkbox></td>
                                        <td><Checkbox name="Short Movies">Short Movies</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Sports">Sports</Checkbox></td>
                                        <td><Checkbox name="Thriller">Thriller</Checkbox></td>
                                        <td><Checkbox name="Travel & Events">Travel & Events</Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td><Checkbox name="Vlogging">Vlogging</Checkbox></td>
                                        <td><Checkbox name="Other">Other</Checkbox></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Collapse>
                        </FormGroup>
                    </Form>

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
                    {this.youtubeForm()}
                    {this.instagramForm()}
                    {this.twitterForm()}
                    {this.snapchatForm()}


                    <Button onClick={this.onUpdatePost} bsStyle="success" id="nextStepButton">
                        Update!
                    </Button>
                    &nbsp;
                    <Button bsStyle="warning">
                        <Link to={"/contentPost/view/id:" + this.state.contentPostID}>
                            Back to post
                        </Link>
                    </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(EditContentPost);


function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

function mapStateToProps(state) {
    return {
        contentPost: state.contentPosts.contentPostDetails[0],
        newContentPost: state.newContentPost.newContentPost,
        auth: state.auth.auth
    };
}
