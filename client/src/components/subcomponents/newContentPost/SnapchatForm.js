import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { snapchatUpdateNewContentPost } from '../../../actions';

//===============================================================================================//

class SnapchatForm extends Component {
    constructor () {
        super();
        this.state = {
            sc_PostFrequency: false,
            sc_Followers: false,
            sc_StoryOpens: false,
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
            })
        }
    }


    handleChange(event) {
        // wait until all data is entered before submitting to redux store. Will send once all values are entered
        // need some repetition since we do not know what order users will be completing the form. Checking in render led to infinite loop.

        switch (event.target.name) {
            case 'sc_PostFrequency': {
                this.setState({ sc_PostFrequency: event.target.value });
                setTimeout(() => {
                    if (this.state.sc_PostFrequency && this.state.sc_Followers && this.state.sc_StoryOpens) {
                        return this.props.dispatch(snapchatUpdateNewContentPost(this.state));
                    }
                }, 200);
                break;
            }
            case 'sc_Followers': {
                this.setState({ sc_Followers: event.target.value });
                setTimeout(() => {
                    if (this.state.sc_PostFrequency && this.state.sc_Followers && this.state.sc_StoryOpens) {
                        return this.props.dispatch(snapchatUpdateNewContentPost(this.state));
                    }
                }, 200);
                break;
            }

            case 'sc_StoryOpens': {
                this.setState({ sc_StoryOpens: event.target.value });
                setTimeout(() => {
                    if (this.state.sc_PostFrequency && this.state.sc_Followers && this.state.sc_StoryOpens) {
                        return this.props.dispatch(snapchatUpdateNewContentPost(this.state));
                    }
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
                <h2>Snapchat account details</h2>
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
            </div>
        )
    }
}

export default connect(mapStateToProps)(SnapchatForm);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}