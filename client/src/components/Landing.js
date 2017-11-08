import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Handy Helper landing page placeholder</h1>
}
                <Button bsStyle="info">
                    <Link to="NewTask">
                        I need help with task(s)
                    </Link>
                </Button>

                <Button bsStyle="warning">
                    <Link to="ProviderHome">
                        I can provide help with tasks
                    </Link>
                </Button>
            </div>
        )
    }
}

export default Landing;