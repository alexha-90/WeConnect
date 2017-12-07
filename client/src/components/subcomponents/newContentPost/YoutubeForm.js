import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { youtubeUpdateNewContentPost } from '../../../actions';

//===============================================================================================//

class YoutubeForm extends Component {
    constructor () {
        super();
        this.state = {
            yt_UploadFrequency: false,
            yt_VideoLength: false,
            yt_SubCount: false,
            yt_ViewCount: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        // // repopulate form fields from checkbox toggling
        if (this.props.newContentPost.youtube) {
            return this.setState({
                yt_UploadFrequency: this.props.newContentPost.youtube.yt_UploadFrequency,
                yt_VideoLength: this.props.newContentPost.youtube.yt_VideoLength,
                yt_SubCount: this.props.newContentPost.youtube.yt_SubCount,
                yt_ViewCount: this.props.newContentPost.youtube.yt_ViewCount,
            })
        }
    }



    handleChange(event) {
        // wait until all data is entered before submitting to redux store. Will send once all values are entered
        // need some repetition since we do not know what order users will be completing the form. Checking in render led to infinite loop.

        switch (event.target.name) {
            case 'yt_UploadFrequency': {
                this.setState({ yt_UploadFrequency: event.target.value });
                setTimeout(() => {
                    if (this.state.yt_UploadFrequency && this.state.yt_VideoLength && this.state.yt_SubCount && this.state.yt_ViewCount) {
                        return this.props.dispatch(youtubeUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'yt_VideoLength': {
                this.setState({ yt_VideoLength: event.target.value });
                setTimeout(() => {
                    if (this.state.yt_UploadFrequency && this.state.yt_VideoLength && this.state.yt_SubCount && this.state.yt_ViewCount) {
                        return this.props.dispatch(youtubeUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'yt_SubCount': {
                this.setState({ yt_SubCount: event.target.value });
                setTimeout(() => {
                    if (this.state.yt_UploadFrequency && this.state.yt_VideoLength && this.state.yt_SubCount && this.state.yt_ViewCount) {
                        return this.props.dispatch(youtubeUpdateNewContentPost(this.state));
                    }
                }, 500);
                break;
            }

            case 'yt_ViewCount': {
                this.setState({ yt_ViewCount: event.target.value });
                setTimeout(() => {
                    if (this.state.yt_UploadFrequency && this.state.yt_VideoLength && this.state.yt_SubCount && this.state.yt_ViewCount) {
                        return this.props.dispatch(youtubeUpdateNewContentPost(this.state));
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
                <h2>YouTube channel details</h2>
                <br/>
                <Form>
                    <FormGroup>
                        <ControlLabel>Upload frequency</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="yt_UploadFrequency"
                            onChange={this.handleChange}
                            value={this.state.yt_UploadFrequency}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="0-1 videos/month">0-1 videos/month</option>
                            <option value="2-3 videos/month">2-3 videos/month</option>
                            <option value="4-5 videos/month">4-5 videos/month</option>
                            <option value="6-7 videos/month">6-7 videos/month</option>
                            <option value="8-9 videos/month">8-9 videos/month</option>
                            <option value="10+ videos/month">10+ videos/month</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Typical video length</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="yt_VideoLength"
                            onChange={this.handleChange}
                            value={this.state.yt_VideoLength}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 2 minutes">Under 2 minutes</option>
                            <option value="Between 2 and 5 minutes">Between 2 and 5 minutes</option>
                            <option value="Between 5 and 10 minutes">Between 5 and 10 minutes</option>
                            <option value="10+ minutes">10+ minutes</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subscriber count</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="yt_SubCount"
                            onChange={this.handleChange}
                            value={this.state.yt_SubCount}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 5,000 users">Under 5,000 users</option>
                            <option value="Between 5,000 and 10,000 users">Between 5,000 and 10,000 users</option>
                            <option value="Between 10,000 and 20,000 users">Between 10,000 and 20,000 users</option>
                            <option value="Between 20,000 and 30,000 users">Between 20,000 and 30,000 users</option>
                            <option value="Between 30,000 and 40,000 users">Between 30,000 and 40,000 users</option>
                            <option value="Between 40,000 and 50,000 users">Between 40,000 and 50,000 users</option>
                            <option value="Between 50,000 and 60,000 users">Between 50,000 and 60,000 users</option>
                            <option value="Between 60,000 and 70,000 users">Between 60,000 and 70,000 users</option>
                            <option value="Between 70,000 and 80,000 users">Between 70,000 and 80,000 users</option>
                            <option value="Between 80,000 and 90,000 users">Between 80,000 and 90,000 users</option>
                            <option value="Between 90,000 and 100,00 users">Between 90,000 and 100,000 users</option>
                            <option value="1,000,000+ users">1,000,000+ users</option>
                        </FormControl>
                        <FormGroup>
                            <ControlLabel>Total channel views</ControlLabel>
                            <FormControl
                                componentClass="select"
                                name="yt_ViewCount"
                                onChange={this.handleChange}
                                value={this.state.yt_ViewCount}
                                placeholder="select">
                                <option value="">-</option>
                                <option value="Under 5,000 views">Under 5,000 views</option>
                                <option value="Between 5,000 and 10,000 views">Between 5,000 and 10,000 views</option>
                                <option value="Between 10,000 and 20,000 views">Between 10,000 and 20,000 views</option>
                                <option value="Between 20,000 and 30,000 views">Between 20,000 and 30,000 views</option>
                                <option value="Between 30,000 and 40,000 views">Between 30,000 and 40,000 views</option>
                                <option value="Between 40,000 and 50,000 views">Between 40,000 and 50,000 views</option>
                                <option value="Between 50,000 and 60,000 views">Between 50,000 and 60,000 views</option>
                                <option value="Between 60,000 and 70,000 views">Between 60,000 and 70,000 views</option>
                                <option value="Between 70,000 and 80,000 views">Between 70,000 and 80,000 views</option>
                                <option value="Between 80,000 and 90,000 views">Between 80,000 and 90,000 views</option>
                                <option value="Between 90,000 and 100,00 views">Between 90,000 and 100,000 views</option>
                                <option value="1,000,000+ views">1,000,000+ views</option>
                            </FormControl>
                        </FormGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(YoutubeForm);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}