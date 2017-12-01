import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { isLoggedIn} from '../actions/index';
import { connect } from 'react-redux';

// check if user is logged in.

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            redirectToHome: false,
        };
        this.loadProfile = this.loadProfile.bind(this);
    }


    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        console.log(result);
                        if (result !== 'OK') {
                            this.setState({ redirectToHome: true });
                            return alert('You are not logged in. Please login or register before proceeding.');
                        }
                        return this.setState({ checkingLogin: false });
                    });
            } catch (err) {
                console.log(err);
                //return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    loadProfile() {
        return (
            <div>
                <h1>profile pagez</h1>
            </div>
        )
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect push to="/"/>
        }

        return (
            <div>
                {this.loadProfile()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}

export default connect(mapStateToProps)(Profile);
