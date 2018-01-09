import React, { Component } from 'react';
import { Button, Radio, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { registerNewUser } from '../../actions/auth';
import { Redirect } from 'react-router';
import moment from 'moment';
import { FieldGroup } from '../helper_functions/';
//===============================================================================================//

class NewUserRegistration extends Component {
    constructor() {
        super();
        this.state = {
            redirectToHome: false,
            username: '',
            emailAddress: '',
            confirmEmailAddress: '',
            password: '',
            confirmPassword: '',
            accountType: '',
        };
        this.validatePassword = this.validatePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
        this.onBlurPW = this.onBlurPW.bind(this);
    }


    componentWillMount() {
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                alert('You are already signed in! If you would like to register a new account, please logout first.');
                return this.setState({ redirectToHome: true });
            }
            return this.setState({ checkingLogin: false });
        },250);
    }

    validatePassword() {
        const length = this.state.password.length;
        if (length > 4) return 'success';
        else if (length > 2) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    onBlurPW () {
        if (this.state.password !== this.state.confirmPassword) {
            return 'error';
        }
        else if (this.state.confirmPassword.length > 0 && (this.state.password === this.state.confirmPassword)) {
            return 'success';
        }
        return null;
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'username': {
                const alphaNumeric = /^[0-9a-zA-Z]+$/;
                if (!event.target.value.match(alphaNumeric)) {
                    return alert('Invalid input. You are only allowed to enter alphabetical characters and numbers here.')
                }
                if (this.state.username.length > 14) {
                    return alert('You have reached the limit for username length.')
                }
                return this.setState({username: event.target.value});
            }
            case 'emailAddress': {
                return this.setState({emailAddress: event.target.value});
            }

            case 'confirmEmailAddress': {
                return this.setState({confirmEmailAddress: event.target.value});
            }

            case 'password': {
                return this.setState({password: event.target.value});
            }

            case 'confirmPassword': {
                return this.setState({confirmPassword: event.target.value});
            }

            case 'accountType': {
                return this.setState({accountType: event.target.value});
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    onSubmit() {
        console.log(this.state.password.length);
        console.log(this.state.confirmPassword.length);
        if (this.state.emailAddress !== this.state.confirmEmailAddress || !this.state.accountType) {
            return alert('Please make sure your email address and password inputs match. An account type must also be selected');
        }

        if (this.state.password.length < 2 || this.state.confirmPassword.length < 2) {
            return alert('Please make sure your password is at least three characters long.');
        }

        if (this.state.password !== this.state.confirmPassword) {
            return alert('Please make sure your password inputs match.');
        }

        console.log('valid inputs');

        (async () => {
            try {
                return this.props.dispatch(registerNewUser({
                    username: this.state.username,
                    emailAddress: this.state.emailAddress,
                    password: this.state.password,
                    accountType: this.state.accountType,
                    timestamp: moment().format("MM/DD/YYYY") + ' ' + moment().utcOffset(-480).format('hh:mm a') + ' PST'
            }))
                .then((result) => {
                    if (result === 'OK') {
                        window.location.reload();
                        alert('New account registered!');
                        return this.setState({redirectToHome: true});
                    }
                    return alert('Sorry an account already exists with this username and/or email address. Please try different inputs');
                });
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect push to="/"/>
        }

        return (
            <div className="newUserRegistrationContainer">
                <h2>Register</h2>
                <form>
                    <FieldGroup
                        onChange={this.handleChange}
                        value={this.state.username}
                        id="username"
                        name="username"
                        type="text"
                        label="Username"
                        placeholder="Create a new username"
                    />
                    <FieldGroup
                        onChange={this.handleChange}
                        value={this.state.emailAddress}
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        label="Email address"
                        placeholder="Enter email address"
                    />

                    <FieldGroup
                        onChange={this.handleChange}
                        value={this.state.confirmEmailAddress}
                        id="confirmEmailAddress"
                        name="confirmEmailAddress"
                        type="email"
                        label="Confirm email"
                        placeholder="Confirm email address"
                    />

                    <FormGroup
                        validationState={this.validatePassword()}
                    >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup
                        validationState={this.onBlurPW()}
                    >
                        <ControlLabel>Confirm password</ControlLabel>
                        <FormControl
                            type="password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            onBlur={this.onBlurPW}
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup
                        onChange={this.handleChange}
                    >
                        <ControlLabel>DEMO NOTE: selection below does not matter at the moment.<br/>I am a...</ControlLabel>
                        <Radio
                            name="accountType"
                            id="contentCreator"
                            value="Content Creator"
                        >
                            Content Creator
                            <br/>
                            Do you have a notable following on social media sites (YouTube, Snapchat, Instagram, Twitter)?
                            Sign up now and use our platform to find partnerships and leverage your digital presence for
                            additional income.
                        </Radio>
                        {' '}
                        <Radio
                            name="accountType"
                            id="advertiser"
                            value="Advertiser"
                        >
                            Advertiser
                            <br />
                            Want to increase your exposure in the digital spectrum? Leverage our platform to increase
                            exposure and promote your business
                        </Radio>
                    </FormGroup>
                    <Button bsStyle="warning" onClick={this.onSubmit}>
                        Register!
                    </Button>
                    <FormControl.Feedback />
                </form>


                <form>

                </form>


            </div>
        )
    }
}

export default connect(mapStateToProps)(NewUserRegistration);

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    };
}