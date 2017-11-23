import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {testNewTaskValidity} from "./stateFunctions";
import { Redirect } from 'react-router-dom';

import { newTaskPOST } from '../actions/index';


class ReviewNewTask extends Component {
    constructor() {
        super();
        this.state = {redirectToAvailableTasks: false};
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }

    componentDidMount() {
        //run function for unit test. Ensure information to be submitted is accurate
        testNewTaskValidity(this.props.newTask)
    }

    onSubmitNewTask() {
        // dispatch to action creator for axios post request

        let sent = false;

        let sendingNewTask = new Promise((resolve, reject) => {
            this.props.dispatch(newTaskPOST(this.props.newTask));
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
            return <Redirect push to="/availableTasks" />;
        }
        return (
            <div>
                <h1>Review your new task below:</h1>

                <ul>
                    <li>Summary: {this.props.newTask.taskSummary}</li>
                    <li>Value: {this.props.newTask.taskValue}</li>
                    <li>Category: {this.props.newTask.taskCategory}</li>
                    <li>Date: {this.props.newTask.taskNeededDate}</li>
                    <li>Hour: {this.props.newTask.taskNeededHour}</li>
                    <li>Description: {this.props.newTask.taskDescription}</li>
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
        newTask: state.newTaskReducer
    };
}

export default connect(mapStateToProps)(ReviewNewTask);


/*
                    onClick={() => {
                        return this.props.dispatch(newTaskPOST(this.props.newTask))
                    }}
                    >
 */