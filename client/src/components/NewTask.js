import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

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
            taskSubject: '',
            taskValue: 0,
            taskCategory: '',
            taskNeededDate: '',
            taskNeededHour: '',
            taskDescription: ''
        };
        this.handleChange  = this.handleChange.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'taskSubject': {
                return this.setState({taskSubject: event.target.value});
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

        if (!this.state.taskCategory) {
            return alert('Error: Please select a category before proceeding');
        }


        alert('subject: ' + this.state.taskSubject + '\n' +
                'Value: ' + this.state.taskValue + '\n' +
                'Category: ' + this.state.taskCategory + '\n' +
                'Needed by: ' + this.state.taskNeededDate + '\n' +
                'Needed by hour: ' + this.state.taskNeededHour + '\n' +
                'Description: ' + this.state.taskDescription
        );
        //dispatch task to action creator
        //action creator will send action to reducer to update store
        //return to react component
        //add task to list
    }

    render() {
        return (
            <div>
                <h1>new task placeholder</h1>

                <form>
                    <FieldGroup
                        label="Headline"
                        id="taskSubject"
                        type="text"
                        name="taskSubject"
                        placeholder="Summary of task (140 characters max)"
                        maxlength="140"
                        value={this.state.taskSubject}
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

                    <Button type="submit" bsStyle="primary" onClick={this.submitNewTask}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default NewTask;


function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}