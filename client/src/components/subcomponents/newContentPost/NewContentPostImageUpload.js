import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
//===============================================================================================//

class NewContentPostImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            onNewContentPostFinalReview: false
        };
    }

    componentWillMount() {
        setTimeout(() => {
            if (!this.props.auth.isLoggedIn) {
                alert('You are not logged in. Please login or register before making a new listing.');
                return this.setState({ redirectToContentCreatorsList: true });
            }
            return this.setState({ checkingLogin: false });
        },500);
    }

    render() {
        if (this.state.onNewContentPostFinalReview) {
            return <Redirect push to="/newContentPost/review" />;
        }

        return (
            <div>
                <div id="stepComponent">
                    <Steps labelPlacement="vertical" current={2}>
                        <Step title="Description" />
                        <Step title="Mediums" />
                        <Step title="Images" />
                        <Step title="Review" />
                        <Step title="Submit!" />
                    </Steps>
                </div>

                <div className="newContentPostContainer">
                    <h1>Upload images TBD</h1>

                    <img name="temp1" width="400px" height="300px" alt="temp1" src="https://images.unsplash.com/photo-1483383490964-8335c18b6666?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    <img name="temp2" width="400px" height="300px" alt="temp2" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    <FieldGroup
                        id="formControlsFile"
                        type="file"
                        label="File"
                        multiple="multiple"
                        help="Upload files to accompany your post."
                    />

                    <hr/>

                    <Button bsStyle="warning">
                        <Link to="/newContentPost/mediums">
                            Back to previous page (Step 2/4)
                        </Link>
                    </Button>

                    <Button id="contentMediumsGoBack" bsStyle="success" onClick={() => this.setState({ onNewContentPostFinalReview: true })}>
                        Proceed to review (Step 4/4)
                    </Button>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewContentPostImageUpload);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        auth: state.auth.auth
    };
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}