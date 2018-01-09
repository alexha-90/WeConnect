import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { loadProfileData } from '../../actions/profile';
import { connect } from 'react-redux';
import profilePostData from './profilePostData';
import profileMessageData from './profileMessageData';
import { loadingSpinner } from '../helper_functions';

//===============================================================================================//


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            redirectToHome: false,
            userActivity: []
        };
    }

    componentWillMount() {
        setTimeout(() => {
            if (!this.props.auth.isLoggedIn) {
                alert('You are not logged in. Please login or register before proceeding.');
                return this.setState({ redirectToHome: true })
            }
        },500);

        (async () => {
            try {
                return this.props.dispatch(loadProfileData())
                .then((data) => {
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    console.log(data);
                    return this.setState({ userActivity: data });
                })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            return this.setState({ loadingComponent: false });
        }, 500);
    }


    render() {
        if (this.state.loadingComponent) {
            return loadingSpinner();
        }

        if (this.state.redirectToHome) {
            return <Redirect push to="/"/>
        }

        return (
            <div className="profileContainer">
                <h1>Your posts:</h1>
                {profilePostData(this.state.userActivity)}

                <hr/>
                <h1>Private conversations:</h1>
                {profileMessageData(this.state.userActivity, this.props.auth.username)}

            </div>
        )
    }
}

export default connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    };
}