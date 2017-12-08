import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { twitterUpdateNewContentPost } from '../../../actions/newContentPost';

//===============================================================================================//

class TwitterForm extends Component {
    constructor () {
        super();
        this.state = {
            tw_PostFrequency: false,
            tw_Followers: false,
            tw_PostLikes: false,
            tw_Comments: false,
            tw_PostFrequencyDefaultVal: true,
            tw_FollowersDefaultVal: true,
            tw_PostLikesDefaultVal: true,
            tw_CommentsDefaultVal: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        // repopulate form fields if user toggled back and forth steps
        if (this.props.newContentPost.twitter) {
            return this.setState({
                tw_PostFrequency: this.props.newContentPost.twitter.tw_PostFrequency,
                tw_Followers: this.props.newContentPost.twitter.tw_Followers,
                tw_PostLikes: this.props.newContentPost.twitter.tw_PostLikes,
                tw_Comments: this.props.newContentPost.twitter.tw_Comments,
                tw_PostFrequencyDefaultVal: false,
                tw_FollowersDefaultVal: false,
                tw_PostLikesDefaultVal: false,
                tw_CommentsDefaultVal: false
            })
        }
    }


    handleChange(event) {
        // wait until all data is entered before submitting to redux store.
        // need some redundancy since we do not know what order users will be completing the form. Checking in render led to infinite loop.
        const errorString = 'Error: Default value (-) is not a valid option! If you want to remove this medium, please deselect the checkbox.';

        switch (event.target.name) {
            case 'tw_PostFrequency': {
                // prevent user from selecting default value ('') after initial change
                if (!event.target.value && !this.state.tw_PostFrequencyDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ tw_PostFrequency: event.target.value, tw_PostFrequencyDefaultVal: false});
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 200);
                break;
            }

            case 'tw_Followers': {
                if (!event.target.value && !this.state.tw_FollowersDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ tw_Followers: event.target.value, tw_FollowersDefaultVal: false});
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 200);
                break;
            }

            case 'tw_PostLikes': {
                if (!event.target.value && !this.state.tw_PostLikesDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ tw_PostLikes: event.target.value, tw_PostLikesDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 200);
                break;
            }

            case 'tw_Comments': {
                if (!event.target.value && !this.state.tw_PostLikesDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ tw_Comments: event.target.value, tw_PostLikesDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 200);
                break;
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Twitter page details</h2>
                <br/>
                <Form>
                    <FormGroup>
                        <ControlLabel>Post frequency</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="tw_PostFrequency"
                            onChange={this.handleChange}
                            value={this.state.tw_PostFrequency}
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
                            name="tw_Followers"
                            onChange={this.handleChange}
                            value={this.state.tw_Followers}
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
                            name="tw_PostLikes"
                            onChange={this.handleChange}
                            value={this.state.tw_PostLikes}
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
                                name="tw_Comments"
                                onChange={this.handleChange}
                                value={this.state.tw_Comments}
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
            </div>
        )
    }
}

export default connect(mapStateToProps)(TwitterForm);



function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}


function dispatchCondition(state, props) {
    setTimeout(() => {
        if (state.tw_PostFrequency && state.tw_Followers && state.tw_PostLikes && state.tw_Comments) {
            return props.dispatch(twitterUpdateNewContentPost(state));
        }
    }, 200);
}