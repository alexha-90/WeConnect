import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { loginUser } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//===============================================================================================//

// future feature: add forgot password feature

class LoginModal extends Component {
    constructor() {
        super();
        this.state = {
            emailAddress: '',
            password: '',
            linkToRegisterPage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'emailAddress': {
                return this.setState({emailAddress: event.target.value});
            }

            case 'password': {
                return this.setState({password: event.target.value});
            }

            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    handleSubmit() {
        if (!this.state.emailAddress || !this.state.password) {
            return alert('Please enter an email address and password.');
        }

        (async () => {
            try {
                this.props.dispatch(loginUser(this.state.emailAddress, this.state.password))
                .then((result) => {
                    if (result === 'OK') {
                        return window.location.reload()
                    }
                    return alert('Error: user was not found from the provided inputs. TO DO: change CSS instead of alert');
                });
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    render() {
        if (this.state.linkToRegisterPage) {
            return <Redirect push to='/newUserRegistration'/>
        }
        return (
            <div>
                <Modal {...this.props} bsSize="sm" aria-labelledby="contained-modal-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">WeConnect</Modal.Title>
                    </Modal.Header>
                    <h4>&nbsp;Sign in:</h4>
                    <Modal.Body>
                        <form>
                            <FieldGroup
                                id="emailAddress"
                                type="email"
                                label="Email address"
                                placeholder="Enter email"
                                onChange={this.handleChange}
                                value={this.state.emailAddress}
                            />
                            <FieldGroup
                                id="password"
                                label="Password"
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <Button style={{width: "100%"}} onClick={this.handleSubmit} bsStyle="success">
                                Login
                            </Button>

                            <hr />

                            <Button bsStyle="warning" id="registerButton" onClick={() => this.setState({ linkToRegisterPage: true })}>
                                Register
                            </Button>

                            <hr />

                        </form>

                        <span>I forgot my password!! (Future feature)</span>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default connect(null)(LoginModal);


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}