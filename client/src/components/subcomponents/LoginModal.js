import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

//===============================================================================================//

// add forgot password feature

class LoginModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="sm" aria-labelledby="contained-modal-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">SocialConnector</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter email"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            label="Password"
                            type="password"
                        />
                        <Button type="submit" bsStyle="success">
                            Login
                        </Button>
                        __________
                        <Button type="submit" bsStyle="warning">
                            <a href="/newUserRegistration">Register</a>

                        </Button>
                    </form>

                    <br/>

                    <a href="">I forgot my password!! (TBD)</a>
                </Modal.Body>
            </Modal>
        );
    }
}

export default LoginModal;


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}