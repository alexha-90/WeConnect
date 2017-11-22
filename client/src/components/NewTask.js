import React, {Component} from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { newTaskToProps } from '../actions/index';

/*
to-do:
add location to task form. zip code.
validate file uploads
calendar needed by
moment.js time
check user credits on account
//default hour option based on user's local time
*/

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReviewNewTask: false,
            taskSummary: '',
            taskValue: 0,
            taskCategory: '',
            taskNeededDate: 'Today',
            taskNeededHour: '12:00am',
            taskDescription: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onReviewNewTask  = this.onReviewNewTask.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'taskSummary': {
                return this.setState({taskSummary: event.target.value});
            }

            case 'taskValue': {
                return this.setState({taskValue: event.target.value});
            }

            case 'taskCategory': {
                return this.setState({taskCategory: event.target.value});
            }

            case 'taskNeededDate': {
                return this.setState({taskNeededDate: event.target.value});
            }

            case 'taskNeededHour': {
                return this.setState({taskNeededHour: event.target.value});
            }

            case 'taskDescription': {
                return this.setState({taskDescription: event.target.value});
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

   onReviewNewTask() {
        if (!this.state.taskSummary || !this.state.taskDescription || !this.state.taskCategory) {
            return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
        }

        return (
            setTimeout(() => {
                this.props.dispatch(newTaskToProps({
                    taskSummary: this.state.taskSummary,
                    taskValue: this.state.taskValue,
                    taskCategory: this.state.taskCategory,
                    taskNeededDate: this.state.taskNeededHour,
                    taskNeededHour: this.state.taskNeededDate,
                    taskDescription: this.state.taskDescription
                }));
                this.setState({redirectToReviewNewTask: true});
            }, 1000)
        );
    }

    render() {
        if (this.state.redirectToReviewNewTask) {
            return <Redirect push to="/reviewNewTask"/>
        }

        return (
            <div>
                <h1>new task placeholder</h1>

                <form>
                    <FieldGroup
                        label="Summary"
                        id="taskSummary"
                        type="text"
                        name="taskSummary"
                        placeholder="Summary of task (140 characters max)"
                        maxLength="140"
                        value={this.state.taskSummary}
                        onChange={this.handleChange}
                    />
                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            name="taskDescription"
                            onChange={this.handleChange}
                            value={this.state.taskDescription}
                            placeholder="Please explain the task you need completed" />
                    </FormGroup>
                    <FieldGroup
                        label="Value (in USD)"
                        id="taskValue"
                        type="number"
                        min="0"
                        max="100"
                        name="taskValue"
                        value={this.state.taskValue}
                        onChange={this.handleChange}
                    />
                    <FormGroup>
                        <ControlLabel>Category</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="taskCategory"
                            onChange={this.handleChange}
                            value={this.state.taskCategory}>
                                <option value="">-</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Gardening">Gardening</option>
                                <option value="Painting">Painting</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Task needed by</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="taskNeededDate"
                            onChange={this.handleChange}
                            value={this.state.taskNeededDate}
                            placeholder="select">
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Needed by hour</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="taskNeededHour"
                            onChange={this.handleChange}
                            value={this.state.taskNeededHour}
                            placeholder="select">
                                <option value="12:00am">12:00am</option>
                                <option value="12:30am">12:30am</option>
                        </FormControl>
                    </FormGroup>
                    <FieldGroup
                        id="fileUpload"
                        type="file"
                        label="fileUpload"
                        help="Upload file(s)"
                    />

                    <Button bsStyle="primary"
                            onClick={this.onReviewNewTask}
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
        newTask: state.newTaskReducer.newTask
    };
}

export default connect(mapStateToProps)(NewTask);