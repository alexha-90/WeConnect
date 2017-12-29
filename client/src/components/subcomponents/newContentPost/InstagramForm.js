import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { instagramUpdateNewContentPost } from '../../../actions/newContentPost';

//===============================================================================================//

class InstagramForm extends Component {
    constructor () {
        super();
        this.state = {
            ig_PostFrequency: false,
            ig_Followers: false,
            ig_Likes: false,
            ig_Comments: false,
            ig_PostFrequencyDefaultVal: true,
            ig_FollowersDefaultVal: true,
            ig_LikesDefaultVal: true,
            ig_CommentsDefaultVal: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        // repopulate form fields if user toggled back and forth steps
        if (this.props.newContentPost.instagram.ig_PostFrequency) {
            return this.setState({
                ig_PostFrequency: this.props.newContentPost.instagram.ig_PostFrequency,
                ig_Followers: this.props.newContentPost.instagram.ig_Followers,
                ig_Likes: this.props.newContentPost.instagram.ig_Likes,
                ig_Comments: this.props.newContentPost.instagram.ig_Comments,
                ig_PostFrequencyDefaultVal: false,
                ig_FollowersDefaultVal: false,
                ig_LikesDefaultVal: false,
                ig_CommentsDefaultVal: false
            })
        }

        // repopulate form fields if user is editing post and has instagram medium selected
        if (this.props.contentPost && this.props.newContentPost['ig_post_frequency']) {
            return this.setState({
                ig_PostFrequency: this.props.newContentPost['ig_post_frequency'],
                ig_Followers: this.props.newContentPost['ig_followers'],
                ig_Likes: this.props.newContentPost['ig_likes'],
                ig_Comments: this.props.newContentPost['ig_comments'],
                ig_PostFrequencyDefaultVal: false,
                ig_FollowersDefaultVal: false,
                ig_LikesDefaultVal: false,
                ig_CommentsDefaultVal: false
            })
        }
    }


    handleChange(event) {
        // wait until all data is entered before submitting to redux store.
        // need some redundancy since we do not know what order users will be completing the form. Checking in render led to infinite loop.
        const errorString = 'Error: Default value (-) is not a valid option! If you want to remove this medium, please deselect the checkbox.';

        switch (event.target.name) {
            // prevent user from selecting default value ('') after initial change
            case 'ig_PostFrequency': {
                if (!event.target.value && !this.state.ig_PostFrequencyDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ ig_PostFrequency: event.target.value, ig_PostFrequencyDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 0);
                break;
            }

            case 'ig_Followers': {
                if (!event.target.value && !this.state.ig_FollowersDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ ig_Followers: event.target.value, ig_FollowersDefaultVal: false});
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 0);
                break;
            }

            case 'ig_Likes': {
                if (!event.target.value && !this.state.ig_LikesDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ ig_Likes: event.target.value, ig_LikesDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 0);
                break;
            }

            case 'ig_Comments': {
                if (!event.target.value && !this.state.ig_CommentsDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ ig_Comments: event.target.value, ig_CommentsDefaultVal: false});
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 0);
                break;
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    render() {
        return (
            <div className="socialMedium">
                <div id="socialMediumHeadline">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" alt="instagram" />
                    <h2>Instagram profile details</h2>
                </div>

                <br/>
                <Form>
                    <FormGroup>
                        <ControlLabel>Post frequency</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="ig_PostFrequency"
                            onChange={this.handleChange}
                            value={this.state.ig_PostFrequency}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="0-1 posts/week">0-1 posts/week</option>
                            <option value="2-3 posts/week">2-3 posts/week</option>
                            <option value="4-5 posts/week">4-5 posts/week</option>
                            <option value="5+ posts/week">5+ posts/week</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Followers</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="ig_Followers"
                            onChange={this.handleChange}
                            value={this.state.ig_Followers}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 200 users">Under 200 users</option>
                            <option value="Between 200 and 1,000 users">Between 200 and 1,000 users</option>
                            <option value="Between 5,000 and 10,000 users">Between 5,000 and 10,000 users</option>
                            <option value="Between 10,000 and 50,000 users">Between 10,000 and 50,000 users</option>
                            <option value="Between 50,000 and 100,000 users">Between 50,000 and 100,000 users</option>
                            <option value="100,000+ users">100,000+ users</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Typical likes per post</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="ig_Likes"
                            onChange={this.handleChange}
                            value={this.state.ig_Likes}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 50 likes">Under 50 likes</option>
                            <option value="Between 50 and 100 likes">Between 50 and 100 likes</option>
                            <option value="Between 100 and 200 likes">Between 100 and 200 likes</option>
                            <option value="200+ likes">200+ likes</option>
                        </FormControl>
                        <FormGroup>
                            <ControlLabel>Typical comments per post</ControlLabel>
                            <FormControl
                                componentClass="select"
                                name="ig_Comments"
                                onChange={this.handleChange}
                                value={this.state.ig_Comments}
                                placeholder="select">
                                <option value="">-</option>
                                <option value="Under 10 comments">Under 10 comments</option>
                                <option value="Between 10 and 50 comments">Between 10 and 50 comments</option>
                                <option value="Between 50 and 100 comments">Between 50 and 100 comments</option>
                                <option value="100+ comments">100+ comments</option>
                            </FormControl>
                        </FormGroup>
                    </FormGroup>
                </Form>
                <hr/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(InstagramForm);


function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        contentPost: state.contentPosts.contentPostDetails[0],
    };
}

function dispatchCondition(state, props) {
    setTimeout(() => {
        if (state.ig_PostFrequency && state.ig_Followers && state.ig_Likes && state.ig_Comments) {
            return props.dispatch(instagramUpdateNewContentPost(state));
        }
    }, 200);
}