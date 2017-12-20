import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { loadProfileData } from '../actions';
import { connect } from 'react-redux';
import profilePostData from './subcomponents/profilePostData';
import profileMessageData from './subcomponents/profileMessageData';

//===============================================================================================//


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            checkingLogin: true,
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
            return this.setState({ checkingLogin: false });
        }, 500);
    }


    render() {
        if (this.state.checkingLogin) {
            return <div className='loader'>Loading profile...</div>;
        }

        if (this.state.redirectToHome) {
            return <Redirect push to="/"/>
        }

        return (
            <div>
                <h1>Post activity:</h1>
                {profilePostData(this.state.userActivity)}

                <hr/>
                <h1>Private conversations:</h1>
                {profileMessageData(this.state.userActivity)}

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