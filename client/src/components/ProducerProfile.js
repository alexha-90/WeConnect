import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


// future expansion: referrals and reviews

class ProducerProfile extends Component {
    render() {
        return (
            <div>
                <h1>Hi, my name is: Harold Richardson</h1>
                <ul>
                    <li>Note: I also do twitter and instagram</li>
                    <li>I make videos</li>
                    <li>Medium: YouTube</li>
                    <li>Category: Comedy and humor</li>
                    <li>Views per month: 2000</li>
                    <li>Channel views: 22,255</li>

                </ul>
                <Button bsStyle="success">
                    Hire Me
                </Button>
                <hr />
                <h1>Recent reviews:</h1>
                <ul>
                    <li>He promoted our content very well. Our sales went up!! 5/5</li>
                    <li>Did not follow instructions we gave him. Subpar. 2/5</li>
                </ul>
            </div>
        )
    }
}

export default ProducerProfile;