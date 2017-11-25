import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


// future expansion: referrals and reviews

class AdvertiserProfile extends Component {
    render() {
        return (
            <div>
                <h1>Leading Cosmetic Company</h1>
                <ul>
                    <li>Description: We are a household recognizable brand name in cosmetics. We use all natural ingredients.</li>
                    <li>Budget: $300-$500 per video</li>
                    <li>Categories of interest: Beauty, Home Improvement</li>
                    <li>Perks: $100 worth of supplies for you to keep and promote in videos</li>
                </ul>
                <Button bsStyle="success">
                    Contact advertiser
                </Button>
                <br/>
                <hr />
                <h1>Recent reviews:</h1>
                <ul>
                    <li>Gave me more supplies than I expected! Wow! Will work with again in the future 5/5</li>
                    <li>Slower than expected, but smooth! 4/5</li>
                </ul>

            </div>
        )
    }
}

export default AdvertiserProfile;