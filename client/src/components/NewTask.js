import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

/*
to-do:
validate file uploads
calendar needed by
moment.js time

*/

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            taskSubject: '',
            taskCategory: '',

        };
        this.handleChange  = this.handleChange.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'taskSubject': {
                return this.setState({taskSubject: event.target.value});
            }

            case 'taskCategory': {
                return this.setState({taskCategory: event.target.value});
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }


    submitNewTask() {
        //if category = '-' or '' prompt error
        //handle upload separately
        alert('subject: ' + this.state.taskSubject + '\n' +
                'Category: ' + this.state.taskCategory);
        //dispatch task to action creator
        //action creator will dispatch to reducer, update store
        //return to react component
    }

    render() {
        return (
            <div>
                <h1>new task placeholder</h1>

                <form>
                    <FieldGroup
                        id="taskSubject"
                        type="text"
                        name="taskSubject"
                        placeholder="Summary of task (100 characters max)"
                        maxlength="100"
                        value={this.state.taskSubject}
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        id="fileUpload"
                        type="file"
                        label="fileUpload"
                        help="Upload file(s)"
                    />
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl componentClass="select" name="taskCategory" onChange={this.handleChange} value={this.state.taskCategory}>
                            <option value="-">-</option>
                            <option value="homeRepair">Home Repair</option>
                            <option value="imageEditing">Image Editing</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Task needed by</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="tbd">Today</option>
                            <option value="tbd1">Tomorrow</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Hour</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="tbd">12:00am</option>
                            <option value="tbd1">12:30am</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>

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