import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

// check if user is logged in.

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            redirectToAvailableTasks: false,

        };
        this.onViewAvailableTasks = this.onViewAvailableTasks.bind(this);
    };


    onViewAvailableTasks() {
        this.setState({redirectToAvailableTasks: true});
    }


    render() {
        if (this.state.redirectToAvailableTasks) {
            return <Redirect push to="/availableTasks"/>
        }

        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>Handy Helper landing page placeholder</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="info">
                        <Link to="newTask">
                            I want to list a new task.
                        </Link>
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="success"
                        onClick={this.onViewAvailableTasks}
                        >
                        I'm just visiting. Let me browse open tasks and see available providers.
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="warning">
                        <Link to="/providerSignUp">
                            I want to earn money with my skills.
                        </Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Landing;