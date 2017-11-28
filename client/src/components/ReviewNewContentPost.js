import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {testNewTaskValidity} from "./stateFunctions";
import { Redirect } from 'react-router-dom';

import { saveNewContentPost } from '../actions/index';


class ReviewNewContentPost extends Component {
    constructor() {
        super();
        this.state = {redirectToContentCreatorsList: false};
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }

    componentDidMount() {
        //console.log(this.props.newContentPost);
        //run function for unit test. Ensure information to be submitted is accurate
        //currently always proceeds regardless. Fix
        testNewTaskValidity(this.props.newContentPost)
    }

    onSubmitNewTask() {
        // dispatch to action creator for axios post request

        let sent = false;

        //can refactor promise
        let sendingNewTask = new Promise((resolve, reject) => {
            this.props.dispatch(saveNewContentPost(this.props.newContentPost));

            // this needs to consider a res from server. Always true and says new task was submitted regardless of result since dispatch was run.
            sent = true;

            if (sent) {
                resolve(alert('Your new task was submitted'));
            } else {
                reject(alert('Something went wrong and your request was rejected. Please try again'));
            }
        });

        sendingNewTask
            .then(() => {
                setTimeout(() => {
                    this.setState({redirectToContentCreatorsList: true})
                }, 1000);
            })
            .catch((reason) => {
                alert('Auto redirect did not work. Your new task was submitted though! Error: ' + reason);
            });
    }

    render() {
        if (this.state.redirectToContentCreatorsList) {
            return <Redirect push to="/contentCreatorsList" />;
        }
        return (
            <div>
                <h1>Review your new task below:</h1>

                <ul>
                    <li>Medium: {this.props.newContentPost.contentMedium}</li>
                    <li>Content Summary: {this.props.newContentPost.contentSummary}</li>
                    <li>Content Description: {this.props.newContentPost.contentDescription}</li>
                    <li>Content Ideal match: {this.props.newContentPost.contentIdealMatch}</li>
                    <li>YouTube upload frequency: {this.props.newContentPost.yt_UploadFrequency}</li>
                    <li>YouTube typical video length: {this.props.newContentPost.yt_VideoLength}</li>
                    <li>YouTube subscriber count: {this.props.newContentPost.yt_SubCount}</li>
                    <li>YouTube channel view count: {this.props.newContentPost.yt_ViewCount}</li>
                </ul>

                <Button bsStyle="success"
                    onClick={this.onSubmitNewTask}
                    >
                    Submit!
                </Button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}

export default connect(mapStateToProps)(ReviewNewContentPost);