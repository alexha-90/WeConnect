import React, {Component} from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { newContentPostToProps } from '../actions/index';

/*
to-do:
property: isAvailable? T/F
add location to task form. zip code.
validate file uploads
calendar needed by
moment.js time
check user credits on account
//default hour option based on user's local time
*/

class NewContentPost extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReviewNewContentPost: false,
            contentSummary: '',
            contentSubCount: '',
            contentMedium: '',
            contentIdealMatch: '',
            contentUploadFrequency: 'Today',
            contentVideoLength: '12:00am',
            contentDescription: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onReviewNewContentPost  = this.onReviewNewContentPost.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'contentSummary': {
                return this.setState({contentSummary: event.target.value});
            }

            case 'contentSubCount': {
                return this.setState({contentSubCount: event.target.value});
            }

            case 'contentIdealMatch': {
                return this.setState({contentIdealMatch: event.target.value});
            }

            case 'contentMedium': {
                return this.setState({contentMedium: event.target.value});
            }

            case 'contentUploadFrequency': {
                return this.setState({contentUploadFrequency: event.target.value});
            }

            case 'contentVideoLength': {
                return this.setState({contentVideoLength: event.target.value});
            }

            case 'contentDescription': {
                return this.setState({contentDescription: event.target.value});
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    onReviewNewContentPost() {
        console.log('current state is:');
        console.log(this.state);
        /*
        if (!this.state.contentSummary || !this.state.contentDescription || !this.state.contentMedium) {
            return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
        }
        */

        return (
            setTimeout(() => {
                this.props.dispatch(newContentPostToProps({
                    contentSummary: this.state.contentSummary,
                    contentSubCount: this.state.contentSubCount,
                    contentMedium: this.state.contentMedium,
                    contentIdealMatch: this.state.contentIdealMatch,
                    contentUploadFrequency: this.state.contentVideoLength,
                    contentVideoLength: this.state.contentUploadFrequency,
                    contentDescription: this.state.contentDescription
                }));
                this.setState({redirectToReviewNewContentPost: true});
            }, 1000)
        );
    }

    render() {
        if (this.state.redirectToReviewNewContentPost) {
            return <Redirect push to="/reviewNewTask"/>
        }

        return (
            <div>
                <h1>Advertise on your content:</h1>

                <form>
                    <FormGroup>
                        <ControlLabel>Medium</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="contentMedium"
                            onChange={this.handleChange}
                            value={this.state.contentMedium}>
                            <option value="">-</option>
                            <option value="YouTube">YouTube</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Snapchat">Snapchat</option>
                        </FormControl>
                    </FormGroup>
                    <FieldGroup
                        label="Summary"
                        id="contentSummary"
                        type="text"
                        name="contentSummary"
                        placeholder="Provide a brief summary about your content (100 characters max)"
                        maxLength="100"
                        value={this.state.contentSummary}
                        onChange={this.handleChange}
                    />
                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            name="contentDescription"
                            onChange={this.handleChange}
                            value={this.state.contentDescription}
                            placeholder="Describe your content in more detail. Examples: target audience, demographics, previous partnerships, etc"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Ideal match</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            name="contentIdealMatch"
                            onChange={this.handleChange}
                            value={this.state.contentIdealMatch}
                            placeholder="Tell us what your ideal match would be (pay rate, frequency, endorsement gifts, ad placement)"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Upload frequency</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="contentUploadFrequency"
                            onChange={this.handleChange}
                            value={this.state.contentUploadFrequency}
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
                        <ControlLabel>Average video length</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="contentVideoLength"
                            onChange={this.handleChange}
                            value={this.state.contentVideoLength}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 2 minutes">Under 2 minutes</option>
                            <option value="Between 2 and 5 minutes">Between 2 and 5 minutes</option>
                            <option value="Between 5 and 10 minutes">Between 5 and 10 minutes</option>
                            <option value="10 or more minutes">10 or more minutes</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subscriber count</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="contentSubCount"
                            onChange={this.handleChange}
                            value={this.state.contentSubCount}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 5,000">Under 5,000</option>
                            <option value="Between 5,000 and 10,000">Between 5,000 and 10,000</option>
                            <option value="Between 10,000 and 20,000">Between 10,000 and 20,000</option>
                            <option value="Between 20,000 and 30,000">Between 20,000 and 30,000</option>
                            <option value="Between 30,000 and 40,000">Between 30,000 and 40,000</option>
                            <option value="Between 40,000 and 50,000">Between 40,000 and 50,000</option>
                            <option value="Between 50,000 and 60,000">Between 50,000 and 60,000</option>
                            <option value="Between 60,000 and 70,0000">Between 60,000 and 70,000</option>
                            <option value="Between 70,000 and 80,000">Between 70,000 and 80,000</option>
                            <option value="Between 80,000 and 90,000">Between 80,000 and 90,000</option>
                            <option value="Between 90,000 and 100,00">Between 90,000 and 100,000</option>
                            <option value="1,000,000 and up">1,000,000 and up</option>

                        </FormControl>
                    </FormGroup>

                    {/*
                    <FieldGroup
                        id="fileUpload"
                        type="file"
                        label="fileUpload"
                        help="Upload file(s)"
                    />
                    */}

                    <Button bsStyle="primary"
                            onClick={this.onReviewNewContentPost}
                        >
                        Review
                    </Button>
                </form>

                <hr/>
            </div>
        )
    }
}

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
        newContentPost: state.newContentPost.newContentPost
    };
}

export default connect(mapStateToProps)(NewContentPost);