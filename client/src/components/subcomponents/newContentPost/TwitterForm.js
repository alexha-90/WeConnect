import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { twitterUpdateNewContentPost } from '../../../actions';

//===============================================================================================//

class TwitterForm extends Component {
    constructor () {
        super();
        this.state = {
            tw_PostFrequency: false,
            tw_Followers: false,
            tw_PostLikes: false,
            tw_Comments: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // wait until all data is entered before submitting to redux store. Will send once all values are entered
        // need some repetition since we do not know what order users will be completing the form. Checking in render led to infinite loop.

        switch (event.target.name) {
            case 'tw_PostFrequency': {
                this.setState({ tw_PostFrequency: event.target.value });
                setTimeout(() => {
                    if (this.state.tw_PostFrequency && this.state.tw_Followers && this.state.tw_PostLikes && this.state.tw_Comments) {
                        return this.props.dispatch(twitterUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'tw_Followers': {
                this.setState({ tw_Followers: event.target.value });
                setTimeout(() => {
                    if (this.state.tw_PostFrequency && this.state.tw_Followers && this.state.tw_PostLikes && this.state.tw_Comments) {
                        return this.props.dispatch(twitterUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'tw_PostLikes': {
                this.setState({ tw_PostLikes: event.target.value });
                setTimeout(() => {
                    if (this.state.tw_PostFrequency && this.state.tw_Followers && this.state.tw_PostLikes && this.state.tw_Comments) {
                        return this.props.dispatch(twitterUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'tw_Comments': {
                this.setState({ tw_Comments: event.target.value });
                setTimeout(() => {
                    if (this.state.tw_PostFrequency && this.state.tw_Followers && this.state.tw_PostLikes && this.state.tw_Comments) {
                        return this.props.dispatch(twitterUpdateNewContentPost(this.state));
                    }
                }, 500);
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
                            <option value="Under 500 users">Under 500 users</option>
                            <option value="Between 500 and 1,000 users">Between 500 and 1,000 users</option>
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
                            <option value="Between 100 and 500 likes">Between 100 and 500 likes</option>
                            <option value="500+ likes">500+ likes</option>
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