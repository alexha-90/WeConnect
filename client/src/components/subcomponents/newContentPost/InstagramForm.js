import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { instagramUpdateNewContentPost } from '../../../actions';

//===============================================================================================//

class InstagramForm extends Component {
    constructor () {
        super();
        this.state = {
            ig_PostFrequency: false,
            ig_Followers: false,
            ig_Likes: false,
            ig_Comments: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // wait until all data is entered before submitting to redux store. Will send once all values are entered
        // need some repetition since we do not know what order users will be completing the form. Checking in render led to infinite loop.

        switch (event.target.name) {
            case 'ig_PostFrequency': {
                this.setState({ ig_PostFrequency: event.target.value });
                setTimeout(() => {
                    if (this.state.ig_PostFrequency && this.state.ig_Followers && this.state.ig_Likes && this.state.ig_Comments) {
                        return this.props.dispatch(instagramUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'ig_Followers': {
                this.setState({ ig_Followers: event.target.value });
                setTimeout(() => {
                    if (this.state.ig_PostFrequency && this.state.ig_Followers && this.state.ig_Likes && this.state.ig_Comments) {
                        return this.props.dispatch(instagramUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'ig_Likes': {
                this.setState({ ig_Likes: event.target.value });
                setTimeout(() => {
                    if (this.state.ig_PostFrequency && this.state.ig_Followers && this.state.ig_Likes && this.state.ig_Comments) {
                        return this.props.dispatch(instagramUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'ig_Comments': {
                this.setState({ ig_Comments: event.target.value });
                setTimeout(() => {
                    if (this.state.ig_PostFrequency && this.state.ig_Followers && this.state.ig_Likes && this.state.ig_Comments) {
                        return this.props.dispatch(instagramUpdateNewContentPost(this.state));
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
                <h2>Instagram page details</h2>
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
                            name="ig_Likes"
                            onChange={this.handleChange}
                            value={this.state.ig_Likes}
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
            </div>
        )
    }
}

export default connect(mapStateToProps)(InstagramForm);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}