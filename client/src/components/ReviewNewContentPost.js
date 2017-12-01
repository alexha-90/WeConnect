import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {testNewTaskValidity} from "./stateFunctions";
import { Redirect } from 'react-router-dom';

import { saveNewContentPost } from '../actions';


class ReviewNewContentPost extends Component {
    constructor() {
        super();
        this.state = {
            redirectToContentCreatorsList: false
        };
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }

    componentDidMount() {
        // this needs work
        //console.log(this.props.contentPosts);
        //run function for unit test. Ensure information to be submitted is accurate
        //currently always proceeds regardless. Fix
        testNewTaskValidity(this.props.newContentPost)
    }

    onSubmitNewTask() {
        (async () => {
            try {
                return this.props.dispatch(saveNewContentPost(this.props.newContentPost))
                .then((result) => {
                    if (result === 'success') {
                        alert('Your post was successfully submitted!');
                        return this.setState({redirectToContentCreatorsList: true})
                    }
                    return alert('Error: Your post was not submitted. Please try again and let us know if this problem persists.');
                })
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