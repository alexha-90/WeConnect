import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


// future expansion: referrals and reviews

class ViewTask extends Component {
    render() {
        return (
            <div>
                <h1>Task: I need help cleaning my kitchen</h1>
                <ul>
                    <li>Value: $50</li>
                    <li>Category: Cleaning</li>
                    <li>Needed By:  Tomorrow</li>
                    <li>Description: My kitchen is disgusting and I need someone to clean it for me asap. I am against doing dishes</li>
                </ul>
                <Button bsStyle="success">
                    I will do this task for
                </Button>
                <form>
                    <input type="number" name="bidValue" value="75" /><br />
                        Value:<br />
                    <input type="text" name="firstname" value="Hey I can get this done for you on Wednesday. I can bring my own cleaning supplies."/><br />
                        Note: <br />
                </form>


            </div>
        )
    }
}

export default ViewTask;