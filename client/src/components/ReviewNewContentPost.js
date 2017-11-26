import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {testNewTaskValidity} from "./stateFunctions";
import { Redirect } from 'react-router-dom';

import { saveNewContentPost } from '../actions/index';


class ReviewNewContentPost extends Component {
    constructor() {
        super();
        this.state = {redirectToAvailableTasks: false};
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }

    componentDidMount() {
        console.log(this.props.newContentPost);
        //run function for unit test. Ensure information to be submitted is accurate
        //currently always proceeds regardless. Fix
        testNewTaskValidity(this.props.newContentPost)
    }

    onSubmitNewTask() {
        // dispatch to action creator for axios post request

        let sent = false;

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
                this.setState({redirectToAvailableTasks: true})
            })
            .catch((reason) => {
                alert('Auto redirect did not work. Your new task was submitted though! Error: ' + reason);
            });
    }

    render() {
        if (this.state.redirectToAvailableTasks) {
            return <Redirect push to="/contentCreatorsList" />;
        }
        return (
            <div>
                <h1>Review your new task below:</h1>

                <ul>
                    <li>Summary: {this.props.newContentPost.contentSummary}</li>
                    <li>Value: {this.props.newContentPost.contentSubCount}</li>
                    <li>Category: {this.props.newContentPost.contentMedium}</li>
                    <li>Date: {this.props.newContentPost.contentUploadFrequency}</li>
                    <li>Hour: {this.props.newContentPost.contentVideoLength}</li>
                    <li>Description: {this.props.newContentPost.contentDescription}</li>
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


/*
                    onClick={() => {
                        return this.props.dispatch(newTaskPOST(this.props.newTask))
                    }}
                    >
 */