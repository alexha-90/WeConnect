import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class ProviderSignUp extends Component {
    render() {
        return (
            <div>
                <h1>Sign up! Enter basic info below</h1>
                <ul>
                    <li>Email</li>
                    <li>username</li>
                </ul>
                <Button bsStyle="success">
                    Sign Up
                </Button>

                <form readOnly>
                    <h1>Would you also like to unlock the ability to claim tasks?</h1>
                    <input type="checkbox" name="vehicle" value="Bike" />

                    <br/>
                </form>

                <h3>Answer the questions below</h3>
                <ul>
                    <li>This menu should hide when checkbox not checked</li>
                    <li>Languages spoken:</li>
                    <li>Skills:</li>
                    <li>License number(s):</li>
                    <li>Description:</li>
                </ul>

                <Button bsStyle="warning">
                    Sign Up
                </Button>

            </div>
        )
    }
}

export default ProviderSignUp;