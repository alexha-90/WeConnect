import React, { Component } from 'react';
import { Button, Radio, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/auth';
import { registerNewUser } from '../actions';
import { Redirect } from 'react-router';
import moment from 'moment';

//redux needed here for this.props.dispatch
// provide login link just in case user misclicked

// feedback at time of entering
// to do later:
//validate password characters
//validate length
//validate not empty
//direct to confirm page

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
            match: false
        };
        // this.validateInput = this.validateInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
        this.onBlurEmail = this.onBlurEmail.bind(this);
        this.onBlurPW = this.onBlurPW.bind(this);
    }


    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                .then((result) => {
                    if (result === 'OK') {
                        this.setState({ redirectToHome: true });
                        return alert('You are already signed in and registered!');
                    }
                    // user not logged in, allow them to register
                });
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    // validateInput() {
    //     const length = this.state.emailAddress.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }


    onBlurEmail () {
        if (this.state.emailAddress !== this.state.confirmEmailAddress) {
            console.log('not match. Render red checkbox for email');
            return this.setState({ match: false });
        }
        console.log('match found! Render green checkbox for email');
        return this.setState({ match: true });
    }

    onBlurPW () {
        if (this.state.password !== this.state.confirmPassword) {
            console.log('not match. Render red checkbox for pw');
            return this.setState({ match: false });
        }
        console.log('match found! Render green checkbox for pw');
        return this.setState({ match: true });
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'username': {
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
        if (!this.state.match || !this.state.accountType) {
            return alert('Please make sure your email address and password inputs match. An account type must also be selected');
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
                        alert('New account registered!');
                        return this.setState({redirectToHome: true});
                    }
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
                        type="text"
                        label="Username"
                        placeholder="Create a new username"
                    />
                    <FieldGroup
                        onChange={this.handleChange}
                        value={this.state.emailAddress}
                        // validationState ={this.validateInput}
                        id="emailAddress"
                        type="email"
                        label="Email address"
                        placeholder="Enter email address"
                    />
                    <FieldGroup
                        onBlur={this.onBlurEmail}
                        onChange={this.handleChange}
                        value={this.state.confirmEmailAddress}
                        id="confirmEmailAddress"
                        type="email"
                        label="Confirm email"
                        placeholder="Confirm email address"
                    />
                    <FieldGroup
                        onChange={this.handleChange}
                        value={this.state.password}
                        id="password"
                        label="Password"
                        type="password"
                    />
                    <FieldGroup
                        onBlur={this.onBlurPW}
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                        id="confirmPassword"
                        label="Confirm password"
                        type="password"
                    />
                    <FormGroup
                        onChange={this.handleChange}
                    >
                        <ControlLabel>I am a...</ControlLabel>
                        <Radio
                            name="accountType"
                            id="accountType"
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
                            id="accountType"
                            value="Advertiser"
                        >
                            Advertiser
                            <br />
                            Want to increase your exposure in the digital spectrum? Internet is growing blah blah.
                            Leverage our platform to increase exposure and promote your business.
                        </Radio>
                    </FormGroup>
                    <Button bsStyle="warning" onClick={this.onSubmit}>
                        Register!
                    </Button>
                </form>

            </div>
        )
    }
}

export default connect(null)(NewUserRegistration);



function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}