import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {testNewTaskValidity} from "./stateFunctions";


//import { onReviewNewTask } from './stateFunctions';


class ReviewNewTask extends Component {
    constructor() {
        super();
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }

    componentDidMount() {
        //run function for unit test. Ensure information to be submitted is accurate
        testNewTaskValidity(this.props.newTask)
    }

    onSubmitNewTask() {
        alert('submitting now');
        // dispatch action to action creator for axios
        // axios POST request to submit information into database

    }

    render() {
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
        newTask: state.newTaskReducer.newTask
    };
}

export default connect(mapStateToProps)(ReviewNewTask);
