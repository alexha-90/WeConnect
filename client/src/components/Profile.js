import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class Profile extends Component {

    render() {
        return (
            <div>
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
                <form>
                    <input type="radio" name="gender" value="male" />&nbsp;Professional?<br />

                </form>

                <ul>
                    <li>Languages spoken: English, Spanish, Chinese</li>
                    <li>Skills: Electrical (Expert), Cleaning (Good), Cooking (Poor)</li>
                    <li>License number(s): CSLB #1223949</li>
                    <li>Description: I am a versatile handyman. Hire me</li>
                    <li>Current projects: #1, #2, #3</li>
                </ul>


            </div>
        )
    }
}

export default Profile;