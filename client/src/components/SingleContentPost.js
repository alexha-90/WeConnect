import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleContentPost } from '../actions/';

import singleContentPostResult from './subcomponents/singleContentPostResult';

// future expansion: referrals and reviews
// upload images. onclick expand
//===============================================================================================//

class SingleContentPost extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            contentPost: []
        };
    }


    componentWillMount() {
        // need to make a rule for when random characters entered after /contentPost/....
        let postID = this.props.location.pathname.match(/\d+/)[0];

        // get current url and extract id number. Query database for this primary key and return all relevant information
        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then((data) => {
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    return this.setState({ contentPost: data });
                })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state);
            return this.setState({loadingComponent: false})
        }, 500);
    }

    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        return (
            <div className="singleContentPostContainer">

                {singleContentPostResult(this.state.contentPost)}

                <Button id="goBack" bsStyle="warning">
                    <Link to="/ContentCreatorsList">
                        Back to results
                    </Link>
                </Button>

                <Button id="messageMe" bsStyle="success">
                    Interested in partnering with me? Send me a message
                </Button>
            </div>
        )
    }
}

export default connect(null)(SingleContentPost);