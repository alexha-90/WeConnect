import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { isLoggedIn } from '../../../actions';

//===============================================================================================//

class NewContentPostImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            onNewContentPostFinalReview: false
        };
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        if (result !== 'OK') {
                            alert('You are not logged in. Please login or register before making a new listing.');
                            return this.setState({ redirectToContentCreatorsList: true });
                        }
                        return this.setState({ checkingLogin: false });
                    });
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    render() {
        if (this.state.onNewContentPostFinalReview) {
            return <Redirect push to="/newContentPost/review" />;
        }

        return (
            <div className="newContentPostContainer">
                <h1>Upload images TBD</h1>

                <img name="temp1" width="400px" height="300px" alt="temp1" src="https://images.unsplash.com/photo-1483383490964-8335c18b6666?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                <img name="temp2" width="400px" height="300px" alt="temp2" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                <FieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."
                />

                <hr/>

                <Button bsStyle="success" onClick={() => this.setState({ onNewContentPostFinalReview: true })}>
                    Proceed to review (Step 4/4)
                </Button>

                <Button id="contentMediumsGoBack" bsStyle="warning">
                    <Link to="/newContentPost/mediums">
                        Back to previous page (Step 2/4)
                    </Link>
                </Button>


            </div>
        )
    }
}

export default connect(mapStateToProps)(NewContentPostImageUpload);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
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