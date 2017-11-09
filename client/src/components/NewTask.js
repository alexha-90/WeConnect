import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { connect } from 'react-redux';
import {submitNewTask} from '../actions/index';

/*
to-do:
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
            taskHeadline: '',
            taskValue: 0,
            taskCategory: '',
            taskNeededDate: 'Today',
            taskNeededHour: '12:00am',
            taskDescription: ''
        };
        this.handleChange  = this.handleChange.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'taskHeadline': {
                return this.setState({taskHeadline: event.target.value});
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


    submitNewTask() {
        //handle upload separately

        if (!this.state.taskHeadline || !this.state.taskDescription || !this.state.taskCategory) {
            return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
        }

        const newTaskInfo = [this.state.taskHeadline, this.state.taskValue, this.state.taskCategory, this.state.taskNeededDate, this.state.taskNeededHour, this.state.taskDescription];

        this.props.dispatch(submitNewTask(newTaskInfo));

        setTimeout(() => {
            console.log(this.props.newTask);
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>new task placeholder</h1>

                <form>
                    <FieldGroup
                        label="Headline"
                        id="taskHeadline"
                        type="text"
                        name="taskHeadline"
                        placeholder="Summary of task (140 characters max)"
                        maxLength="140"
                        value={this.state.taskHeadline}
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
                                <option value="homeRepair">Home Repair</option>
                                <option value="imageEditing">Image Editing</option>
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

                    <Button bsStyle="primary" onClick={this.submitNewTask}>
                        Submit
                    </Button>
                </form>
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
        newTask: state.newTask
    };
}

export default connect(mapStateToProps)(NewTask);

// <Button type="submit" bsStyle="primary" onClick={this.submitNewTask}>
