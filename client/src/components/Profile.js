import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

// needs work. This is what users see when logged in.


class Profile extends Component {

    render() {
        return (
            <div>
                <h1>Content Creator</h1>
                <Table striped responsive bordered style={{width: '60%'}}>
                    <tbody>
                    <tr>
                        <td>Username:</td>
                        <td>genericUser5224</td>
                    </tr>
                    <tr>
                        <td>Joined:</td>
                        <td>August 2017</td>
                    </tr>
                    <tr>
                        <td>Avatar:</td>
                        <td>(uploaded image)</td>
                    </tr>
                    <tr>
                    </tr>
                    </tbody>
                </Table>


                <hr />
                <h1>Recent reviews:</h1>
                <ul>
                    <li>As customer: he was great!! 5/5</li>
                    <li>As provider: he sucked!! 1/5</li>
                </ul>


            </div>
        )
    }
}

export default Profile;