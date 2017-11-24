import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


// future expansion: referrals and reviews

class ViewProviderProfile extends Component {
    render() {
        return (
            <div>
                <h1>Hi, my name is: Harold Richardson</h1>
                <ul>
                    <li>Languages spoken: English, Spanish, Chinese</li>
                    <li>Skills: Electrical (Expert), Cleaning (Good), Cooking (Poor)</li>
                    <li>License number(s): CSLB #1223949</li>
                    <li>Description: I am a versatile handyman. Hire me</li>
                    <li>Current projects: #1, #2, #3</li>
                </ul>
                <Button bsStyle="success">
                    Hire Me
                </Button>

            </div>
        )
    }
}

export default ViewProviderProfile;