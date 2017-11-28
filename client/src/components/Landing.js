import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router';

// check if user is logged in.

class Landing extends Component {

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>SocialConnector landing page placeholder</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="info">
                        <Link to="ContentCreatorsList">
                            Content creators looking for revenue
                        </Link>
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsStyle="warning">
                        <Link to="AdvertisersList">
                            Advertisers looking to promote
                        </Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Landing;