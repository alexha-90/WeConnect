import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { youtubeUpdateNewContentPost } from '../../actions/newContentPost';

//===============================================================================================//

class YoutubeForm extends Component {
    constructor () {
        super();
        this.state = {
            yt_UploadFrequency: false,
            yt_VideoLength: false,
            yt_SubCount: false,
            yt_ViewCount: false,
            yt_UploadFrequencyDefaultVal: true,
            yt_SubCountDefaultVal: true,
            yt_VideoLengthDefaultVal: true,
            yt_ViewCountDefaultVal: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        // repopulate form fields if user toggled back and forth steps and has youtube medium selected
        if (this.props.newContentPost.youtube.yt_UploadFrequency) {
            return this.setState({
                yt_UploadFrequency: this.props.newContentPost.youtube.yt_UploadFrequency,
                yt_VideoLength: this.props.newContentPost.youtube.yt_VideoLength,
                yt_SubCount: this.props.newContentPost.youtube.yt_SubCount,
                yt_ViewCount: this.props.newContentPost.youtube.yt_ViewCount,
                yt_UploadFrequencyDefaultVal: false,
                yt_SubCountDefaultVal: false,
                yt_VideoLengthDefaultVal: false,
                yt_ViewCountDefaultVal: false
            })
        }

        // repopulate form fields if user is editing post and has youtube medium selected
        if (this.props.contentPost && this.props.contentPost['yt_upload_frequency']) {
            return this.setState({
                yt_UploadFrequency: this.props.contentPost['yt_upload_frequency'],
                yt_VideoLength: this.props.contentPost['yt_video_length'],
                yt_SubCount: this.props.contentPost['yt_sub_count'],
                yt_ViewCount: this.props.contentPost['yt_view_count'],
                yt_UploadFrequencyDefaultVal: false,
                yt_SubCountDefaultVal: false,
                yt_VideoLengthDefaultVal: false,
                yt_ViewCountDefaultVal: false
            })
        }

    }

    handleChange(event) {
        // wait until all data is entered before submitting to redux store.
        // need some redundancy since we do not know what order users will be completing the form. Checking in render led to infinite loop.
        const errorString = 'Error: Default value (-) is not a valid option! If you want to remove this medium, please deselect the checkbox.';

        switch (event.target.name) {
            case 'yt_UploadFrequency': {
                // prevent user from selecting default value ('') after initial change
                if (!event.target.value && !this.state.yt_UploadFrequencyDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ yt_UploadFrequency: event.target.value, yt_UploadFrequencyDefaultVal: false});
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 50);
                break;
            }

            case 'yt_VideoLength': {
                if (!event.target.value && !this.state.yt_VideoLengthDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ yt_VideoLength: event.target.value, yt_VideoLengthDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 0);
                break;
            }

            case 'yt_SubCount': {
                if (!event.target.value && !this.state.yt_SubCountDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ yt_SubCount: event.target.value, yt_SubCountDefaultVal: false });
                setTimeout(() => {
                    dispatchCondition(this.state, this.props);
                }, 0);
                break;
            }

            case 'yt_ViewCount': {
                if (!event.target.value && !this.state.yt_ViewCountDefaultVal) {
                    return alert(errorString);
                }
                this.setState({ yt_ViewCount: event.target.value, yt_ViewCountDefaultVal: false});
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
                    <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png" alt="youtube" />
                    <h2>YouTube channel details</h2>
                </div>
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
                <hr/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(YoutubeForm);



function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        contentPost: state.contentPosts.contentPostDetails[0],
    };
}

function dispatchCondition(state, props) {
    if (state.yt_UploadFrequency && state.yt_VideoLength && state.yt_SubCount && state.yt_ViewCount) {
        return props.dispatch(youtubeUpdateNewContentPost(state));
    }
}