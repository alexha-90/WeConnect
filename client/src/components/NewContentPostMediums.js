import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import YoutubeForm from './subcomponents/YoutubeForm';
//
// import { isLoggedIn, newContentPostToProps } from '../actions';
////

//===============================================================================================//

class NewContentPostMediums extends Component {
    constructor() {
        super();
        this.state = {
            showYouTubeForm: false,
            contentMedium: '',
        };
        this.onReviewNewContentPost = this.onReviewNewContentPost.bind(this);
        this.youtubeForm = this.youtubeForm.bind(this);
    }

    youtubeForm() {
        if (!this.state.showYouTubeForm) {
            // retrieve data before uncheck, if available
            return;
        }
        return <YoutubeForm />
    }

    onReviewNewContentPost() {
        if (this.state.showYouTubeForm && !this.props.newContentPost.youtube) {
            return alert('Error: Please make sure to fill out all details for the YouTube form or deselect the option.')
        }

        console.log('yes');
        // // validation for later. Check that all contentX fields and one entry are filled in.
        // if (!this.state.contentSummary || !this.state.contentDescription || !this.state.contentMedium) {
        //     return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
        // }
        //
        //
        // (async () => {
        //     try {
        //         this.props.dispatch(newContentPostToProps({
        //
        //         }));
        //         return await this.setState({redirectToReviewNewContentPost: true});
        //
        //     } catch (err) {
        //         return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
        //     }
        // })();
    }

    render() {
        console.log(this.props.newContentPost);

        return (
            <div className="newContentPostContainer">

                <div className="contentMediumsPropsInfo">
                    <h3>Inputs thus far:</h3>
                    <ul>
                        <li>User location: {this.props.newContentPost.userLocation}</li>
                        <li>Content summary: {this.props.newContentPost.contentSummary}</li>
                        <li>Content description: {this.props.newContentPost.contentDescription}</li>
                        <li>Content ideal match: {this.props.newContentPost.contentIdealMatch}</li>
                        <li>Content tags: {this.props.newContentPost.contentTags}</li>
                        {/*<li>Content categories: {this.props.newContentPost.contentCategories.join(', ')}</li>*/}
                    </ul>
                </div>
                <hr/>
                <Form>
                    <FormGroup>
                        <ControlLabel>Marketable medium(s)</ControlLabel>

                        <FormGroup>
                            <Checkbox inline name="YouTube" onClick={() => this.setState({ showYouTubeForm: !this.state.showYouTubeForm })}>
                                YouTube
                            </Checkbox>
                            <Checkbox inline name="Instagram">Instagram</Checkbox>
                            <Checkbox inline name="Twitter">Twitter</Checkbox>
                            <Checkbox inline name="Snapchat">Snapchat</Checkbox>
                        </FormGroup>
                    </FormGroup>
                </Form>

                {this.youtubeForm()}


                <Button bsStyle="success" onClick={this.onReviewNewContentPost}>
                    Proceed to final review
                </Button>

                <Button id="contentMediumsGoBack" bsStyle="warning" onClick={() => alert('NOTE: You will need to reselect categories. Sorry for the inconvenience!')}>
                    <Link to="/newContentPost">
                        Back to previous page
                    </Link>
                </Button>

            </div>
        )
    }
}



export default connect(mapStateToProps)(NewContentPostMediums);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}