import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

// check if user is logged in.

class Landing extends Component {
    constructor() {
        super();
    };


    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>SocialConnector landing page placeholder</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="info">
                        <Link to="ContentCreatorsList">
                            View content creators
                        </Link>
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="warning">
                        <Link to="AdvertisersList">
                            View advertisers
                        </Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Landing;


/*
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
 */