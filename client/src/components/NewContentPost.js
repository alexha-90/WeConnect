import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

import { newContentPostToProps } from '../actions/newContentPost';
import { organizeCategories } from './helper_functions/newContentHelpers';
//this can be refactored into smaller components so that either new form or review is shown.
//can avoid a redux action dispatch

// add location autocomplete from here: https://kenny-hibino.github.io/react-places-autocomplete/


// google autocomplete api for location


/*
to do: checkbox state preserved when toggling stages. Values are preserving correctly still.
    checkboxStatus() {
        //componentWillMount, load status of checkboxes
        //if event.target.value is in this.props.newContentPost.contentCategories
    }


to-do:
file uploads
*/
//===============================================================================================//

let categoriesArr = [];

class NewContentPost extends Component {
    constructor() {
        super();
        this.state = {
            checkingLogin: true,
            redirectToContentCreatorsList: false,
            redirectToNewContentMediums: false,
            categoryListOpen: false,
            userLocation: '',
            contentSummary: '',
            contentDescription: '',
            contentIdealMatch: '',
            contentTags: '',
            contentCategories: []
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onReviewForNextStep  = this.onReviewForNextStep.bind(this);
        this.openCategoryIndicator = this.openCategoryIndicator.bind(this);
        this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
    }

    componentWillMount() {
        setTimeout(() => {
            if (!this.props.auth.isLoggedIn) {
                alert('You are not logged in. Please login or register before making a new listing.');
                return this.setState({ redirectToContentCreatorsList: true });
            }
            return this.setState({ checkingLogin: false });
        },500);

        // // repopulate form fields if redirected to this component from future step page
        if (this.props.newContentPost.contentSummary) {
            return this.setState({
                userLocation: this.props.newContentPost.userLocation,
                contentSummary: this.props.newContentPost.contentSummary,
                contentDescription: this.props.newContentPost.contentDescription,
                contentIdealMatch: this.props.newContentPost.contentIdealMatch,
                contentTags: this.props.newContentPost.contentTags,
                contentCategories: this.props.newContentPost.contentCategories
            })
        }
    }


    handleTextChange(event) {
        switch (event.target.name) {
            case 'userLocation': {
                return this.setState({userLocation: event.target.value});
            }
            case 'contentSummary': {
                return this.setState({contentSummary: event.target.value});
            }
            case 'contentDescription': {
                return this.setState({contentDescription: event.target.value});
            }
            case 'contentIdealMatch': {
                return this.setState({contentIdealMatch: event.target.value});
            }
            case 'contentTags': {
                return this.setState({contentTags: event.target.value});
            }
            default: {
                alert('ERROR: input not recognized');
            }
        }
    }


    handleCategoryToggle(event) {
        if (event.target.checked) {
            return categoriesArr.push(event.target.name);
        }
    }

    openCategoryIndicator() {
        if (this.state.categoryListOpen) {
            return '(-)'
        }
        if (!this.state.categoryListOpen) {
            return '(+)'
        }
    }

    onReviewForNextStep() {
        // (async () => {
        //     return organizeCategories(categoriesArr)
        //     .then((result) => {
        //         console.log(result);
        //         // console.log('^^^^');
        //         // return this.setState({ contentCategories: result });
        //     });
        // })();

        // can split into an exported function
        // remove duplicates from categories array. Very efficient method borrowed from https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
        let obj = {};
        let uniqueCategoriesArr = [];
        for (let i = 0; i < categoriesArr.length; i++) {
            obj[categoriesArr[i]] = 0;
        }
        for (let i in obj) {
            uniqueCategoriesArr.push(i);
        }

        // sort categories array. Very efficient method borrowed from https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra
        uniqueCategoriesArr.sort((a,b) => {
           return (a < b) ? -1 : (a > b) ? 1 :0;
        });

        this.setState({ contentCategories: uniqueCategoriesArr });

        setTimeout(() => {
            if (!this.state.userLocation || !this.state.contentSummary || !this.state.contentDescription || !this.state.contentIdealMatch || !this.state.contentCategories.length) {
                return alert('Error: Please make to fill out this entire form before proceeding.');
            }

            (async () => {
                try {
                    this.props.dispatch(newContentPostToProps({
                        userLocation: this.state.userLocation,
                        contentSummary: this.state.contentSummary,
                        contentDescription: this.state.contentDescription,
                        contentTags: this.state.contentTags,
                        contentIdealMatch: this.state.contentIdealMatch,
                        contentCategories: this.state.contentCategories
                    }));
                    return await this.setState({redirectToNewContentMediums: true});

                } catch (err) {
                    return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
                }
            })();
        }, 500);
    }

    render() {
        if (this.state.redirectToContentCreatorsList) {
            return <Redirect push to="/contentCreatorsList"/>
        }

        if (this.state.checkingLogin) {
            return <div className='loader'>Authorizing...</div>;
        }

        if (this.state.redirectToNewContentMediums) {
            return <Redirect push to='/newContentPost/mediums'/>
        }

        return (
            <div>
                <div id="stepComponent">
                    <Steps labelPlacement="vertical" current={0}>
                        <Step title="Description" />
                        <Step title="Mediums" />
                        <Step title="Images" />
                        <Step title="Review" />
                        <Step title="Submit!" />
                    </Steps>
                </div>
                <div className="newContentPostContainer">
                    <h1>Describe your content:</h1>
                    <img src="https://i.imgur.com/JRruDP6.png" id="newPostGraphic" alt="newPostGraphic" />
                    <Form>
                        <FieldGroup
                            label="Location"
                            id="userLocation"
                            type="text"
                            name="userLocation"
                            placeholder="Where do you live? Please list your city, country, and other relevant information. DO NOT ENTER YOUR FULL ADDRESS."
                            maxLength="100"
                            value={this.state.userLocation}
                            onChange={this.handleTextChange}
                        />
                        <FieldGroup
                            label="Summary"
                            id="contentSummary"
                            type="text"
                            name="contentSummary"
                            placeholder="Provide a brief summary about your content (100 characters max)"
                            maxLength="100"
                            value={this.state.contentSummary}
                            onChange={this.handleTextChange}
                        />
                        <FormGroup>
                            <ControlLabel>Full description</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                name="contentDescription"
                                onChange={this.handleTextChange}
                                value={this.state.contentDescription}
                                style={{minHeight: "60px", minWidth: "100%" }}
                                placeholder="Describe your content in more detail. Examples: target audience, demographics, previous partnerships, etc"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Ideal match</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                name="contentIdealMatch"
                                onChange={this.handleTextChange}
                                value={this.state.contentIdealMatch}
                                style={{minHeight: "60px", minWidth: "100%"}}
                                placeholder="Tell us what your ideal match would be (pay rate, frequency, endorsement gifts, ad placement)"
                            />
                        </FormGroup>
                        <FieldGroup
                                label="Tags"
                                id="contentTags"
                                type="text"
                                name="contentTags"
                                placeholder="Enter some keywords that describe your content (separate each item with a comma)"
                                maxLength="100"
                                value={this.state.contentTags}
                                onChange={this.handleTextChange}
                        />

                        <div className="categories">
                            <FormGroup>
                                <span onClick={() => this.setState({ categoryListOpen: !this.state.categoryListOpen })}>
                                    <ControlLabel>{this.openCategoryIndicator()} Associated categories</ControlLabel>
                                </span>
                                <br />
                                <Collapse in={this.state.categoryListOpen}>
                                    <Table onChange={this.handleCategoryToggle} striped bordered id="categoryTable">
                                        <tbody>
                                        <tr>
                                            <td><Checkbox defaultChecked={true} name="Action/Adventure">Action/Adventure</Checkbox></td>
                                            <td><Checkbox name="Anime/Animation">Anime/Animation</Checkbox></td>
                                            <td><Checkbox name="Autos & Vehicles">Autos & Vehicles</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Classics">Classics</Checkbox></td>
                                            <td><Checkbox name="Comedy">Comedy</Checkbox></td>
                                            <td><Checkbox name="Documentary">Documentary</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Drama">Drama</Checkbox></td>
                                            <td><Checkbox name="Education">Education</Checkbox></td>
                                            <td><Checkbox name="Entertainment">Entertainment</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Family">Family</Checkbox></td>
                                            <td><Checkbox name="Film & Animation">Film & Animation</Checkbox></td>
                                            <td><Checkbox name="Foreign">Foreign</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Gaming">Gaming</Checkbox></td>
                                            <td><Checkbox name="Horror">Horror</Checkbox></td>
                                            <td><Checkbox name="How-to & Style">How-to & Style</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Movies">Movies</Checkbox></td>
                                            <td><Checkbox name="Music">Music</Checkbox></td>
                                            <td><Checkbox name="News & Politics">News & Politics</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Nonprofits & Activism">Nonprofits & Activism</Checkbox></td>
                                            <td><Checkbox name="People & Blog">People & Blogs</Checkbox></td>
                                            <td><Checkbox name="Pets & Animals">Pets & Animals</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Sci-Fi/Fantasy">Sci-Fi/Fantasy</Checkbox></td>
                                            <td><Checkbox name="Science & Technology">Science & Technology</Checkbox></td>
                                            <td><Checkbox name="Short Movies">Short Movies</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Sports">Sports</Checkbox></td>
                                            <td><Checkbox name="Thriller">Thriller</Checkbox></td>
                                            <td><Checkbox name="Travel & Events">Travel & Events</Checkbox></td>
                                        </tr>
                                        <tr>
                                            <td><Checkbox name="Vlogging">Vlogging</Checkbox></td>
                                            <td><Checkbox name="Other">Other</Checkbox></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Collapse>
                            </FormGroup>
                        </div>

                        <Button id="nextStepButton" bsStyle="success"
                                onClick={this.onReviewForNextStep}
                            >
                            Proceed - Select your content mediums (Step 2/5)
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewContentPost);



function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        auth: state.auth.auth
    };
}