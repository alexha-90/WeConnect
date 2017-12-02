import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { isLoggedIn, loadProfileData } from '../actions';
import { connect } from 'react-redux';

import profileData from './subcomponents/profileData';
// check if user is logged in.

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            checkingLogin: true,
            redirectToHome: false,
            userActivity: [],
        };
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                .then((result) => {
                    if (result !== 'OK') {
                        alert('You are not logged in. Please login or register before proceeding.');
                        return this.setState({redirectToHome: true})
                    }
                })
                .then (() => {
                    return this.props.dispatch(loadProfileData())
                })
                .then((data) => {
                    return this.setState({ userActivity: data, checkingLogin: false });
                })
            } catch (err) {
                console.log(err);
                //return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('&&&&&&&');
            console.log(this.state);
            return profileData();
        }, 1500);
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
                hey
                {/*{this.loadProfileCheck()}*/}

                {profileData()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.userProfile.userProfileData
    };
}

export default connect(mapStateToProps)(Profile)














/*
import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { isLoggedIn, loadProfileData } from '../actions';
import { connect } from 'react-redux';

import profileData from './subcomponents/profileData';
// check if user is logged in.

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            checkingLogin: true,
            redirectToHome: false,
        };
        this.loadProfileCheck = this.loadProfileCheck.bind(this);
    }


    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                .then((result) => {
                    console.log(result);
                    if (result !== 'OK') {
                        alert('You are not logged in. Please login or register before proceeding.');
                        return this.setState({ redirectToHome: true });
                    }
                    return this.setState({ checkingLogin: false });
                });
            } catch (err) {
                console.log(err);
                //return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            return this.propagateContent();
        }, 1500);
    }

    loadProfileCheck() {
        if (this.state.checkingLogin) {
            return <div className='loader'>Loading profile...</div>;
        }
        // dispatch action to retrieve info from database
        //  set all activity by user in redux state
        // render component with that user's activity

        //this.props.dispatch(loadProfileData());

        //return profileData();

        (async() => {
            try {
                return this.props.dispatch(loadProfileData())
                .then((result) => {
                    console.log('&&&&&&&');
                    console.log(result);
                    return profileData();
                });
            } catch (err) {
                return alert('Error: Unable to retrieve your profile. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

 */