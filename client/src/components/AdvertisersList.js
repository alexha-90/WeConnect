import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


// future expansion: referrals and reviews

class AdvertisersList extends Component {
    render() {
        return (
            <div>
                Want to advertise your product?
                <Button>
                    <Link to="newTask">
                        Create a new campaign
                    </Link>
                </Button>
                <br />
                <Button bsStyle="info">
                    <Link to="/advertiserProfile">
                        Click to see a sample campaign
                    </Link>
                </Button>

                <img alt='temp' style={{width: '100%'}} src='https://help.upsight.com/media/uploads/New%20Dashboard%20Images/campaign-list.png'/>
            </div>
        )
    }
}

export default AdvertisersList;