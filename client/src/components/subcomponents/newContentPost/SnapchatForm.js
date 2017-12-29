import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { snapchatUpdateNewContentPost } from '../../../actions/newContentPost';

//===============================================================================================//

class SnapchatForm extends Component {
    constructor () {
        super();
        this.state = {
            sc_PostFrequency: false,
            sc_Followers: false,
            sc_StoryOpens: false,
            sc_PostFrequencyDefaultVal: true,
            sc_FollowersDefaultVal: true,
            sc_StoryOpensDefaultVal: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        // repopulate form fields if user toggled back and forth steps
        if (this.props.newContentPost.snapchat) {
            return this.setState({
                sc_PostFrequency: this.props.newContentPost.snapchat.sc_PostFrequency,
                sc_Followers: this.props.newContentPost.snapchat.sc_Followers,
                sc_StoryOpens: this.props.newContentPost.snapchat.sc_StoryOpens,
                sc_PostFrequencyDefaultVal: false,
                sc_FollowersDefaultVal: false,
                sc_StoryOpensDefaultVal: false,
            })
        }

        // repopulate form fields if user is editing post and has snapchat medium selected
        if (this.props.contentPost && this.props.contentPost['sc_post_frequency']) {
            return this.setState({
                sc_PostFrequency: this.props.contentPost['sc_post_frequency'],
                sc_Followers: this.props.contentPost['sc_followers'],
                sc_StoryOpens: this.props.contentPost['sc_story_opens'],
                sc_PostFrequencyDefaultVal: false,
                sc_FollowersDefaultVal: false,
                sc_StoryOpensDefaultVal: false,
            })
        }

    }


    handleChange(event) {
        // wait until all data is entered before submitting to redux store.
        // need some redundancy since we do not know what order users will be completing the form. Checking in render led to infinite loop.
        const errorString = 'Error: Default value (-) is not a valid option! If you want to remove this medium, please deselect the checkbox.';

        switch (event.target.name) {
            case 'sc_PostFrequency': {
                // prevent user from selecting default value ('') after initial change
                if (!event.target.value && !this.state.sc_PostFrequencyDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ sc_PostFrequency: event.target.value, sc_PostFrequencyDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 200);
                break;
            }
            case 'sc_Followers': {
                if (!event.target.value && !this.state.sc_FollowersDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ sc_Followers: event.target.value, sc_FollowersDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 200);
                break;
            }

            case 'sc_StoryOpens': {
                if (!event.target.value && !this.state.sc_StoryOpensDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ sc_StoryOpens: event.target.value, sc_StoryOpensDefaultVal: false });
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
            <div className="socialMedium">
                <div id="socialMediumHeadline">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png" alt="snapchat" />
                    <h2>Snapchat account details</h2>
                </div>

                <br/>
                <Form>
                    <FormGroup>
                        <ControlLabel>Post frequency</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="sc_PostFrequency"
                            onChange={this.handleChange}
                            value={this.state.sc_PostFrequency}
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
                            name="sc_Followers"
                            onChange={this.handleChange}
                            value={this.state.sc_Followers}
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
                        <ControlLabel>Typical story opens</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="sc_StoryOpens"
                            onChange={this.handleChange}
                            value={this.state.sc_StoryOpens}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 50 opens">Under 50 opens</option>
                            <option value="Between 50 and 100 opens">Between 50 and 100 opens</option>
                            <option value="Between 100 and 200 opens">Between 100 and 200 opens</option>
                            <option value="200+ likes">200+ opens</option>
                        </FormControl>
                    </FormGroup>
                </Form>
                <hr/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SnapchatForm);


function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        contentPost: state.contentPosts.contentPostDetails[0],
    };
}

function dispatchCondition(state, props) {
    setTimeout(() => {
        if (state.sc_PostFrequency && state.sc_Followers && state.sc_StoryOpens) {
            return props.dispatch(snapchatUpdateNewContentPost(state));
        }
    }, 200);
}
