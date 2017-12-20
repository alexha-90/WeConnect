import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Button, Panel, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { newPrivateMessage } from '../../../actions/';

//===============================================================================================//

class ContactForm extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: true,
            message: ''
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this)
    }

    handleTextChange(event) {
        switch (event.target.name) {
            case 'message': {
                return this.setState({ message: event.target.value });
            }
            default: {
                alert('ERROR: input not recognized');
            }
        }
    }

    submitMessage () {
        if (this.state.message.length < 5) {
            return alert('Please write a message that is at least 5 characters long');
        }

        const timestamp = moment().format("MM/DD/YYYY") + ' ' + moment().utcOffset(-480).format('hh:mm a') + ' PST';

        (async () => {
            try {
                this.props.dispatch(newPrivateMessage({
                    message: this.state.message,
                    timestamp: timestamp,
                    postID: this.props.privateMessage.postID,
                    posterID: this.props.privateMessage.posterID,
                    userID: this.props.privateMessage.userID,
                    postSummary: this.props.privateMessage.postSummary
                }));
                alert('Your message has been sent to the user. You can track this message in your profile!');
                // return window.location.reload();
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }


    render() {
        return (
            <div className="singleContentPostContainer">
                <Panel collapsible expanded={this.state.open}>
                    <form>
                        <FormGroup>
                            <ControlLabel>Your message:</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                name="message"
                                onChange={this.handleTextChange}
                                value={this.state.message}
                                style={{minHeight: "60px", minWidth: "100%"}}
                                placeholder="Write your message here"
                            />
                        </FormGroup>
                    </form>
                    <Button onClick={this.submitMessage} bsStyle="success">
                        Send message!
                    </Button>

                </Panel>
            </div>
        );
    }
}



export default connect(mapStateToProps)(ContactForm);

function mapStateToProps(state) {
    return {
        privateMessage: state.privateMessage.privateMessageIDs
    };
}