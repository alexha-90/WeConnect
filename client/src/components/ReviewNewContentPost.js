import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {testNewTaskValidity} from "./stateFunctions";
import { Redirect } from 'react-router-dom';

import { saveNewContentPost } from '../actions/index';


class ReviewNewContentPost extends Component {
    constructor() {
        super();
        this.state = {
            redirectToContentCreatorsList: false
        };
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }

    componentDidMount() {
        //console.log(this.props.newContentPost);
        //run function for unit test. Ensure information to be submitted is accurate
        //currently always proceeds regardless. Fix
        testNewTaskValidity(this.props.newContentPost)
    }

    onSubmitNewTask() {
        (async () => {
            try {
                this.props.dispatch(saveNewContentPost(this.props.newContentPost));
                return setTimeout(() => {
                            alert('Your new post was submitted! Hope you can find a good partnership!');
                            return this.setState({redirectToContentCreatorsList: true})
                        }, 1000);
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
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