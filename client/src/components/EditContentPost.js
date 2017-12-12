import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';

import YoutubeForm from './subcomponents/newContentPost/YoutubeForm';

import { isLoggedIn } from '../actions/auth';
import { fetchSingleContentPost, editSingleContentPost } from '../actions/';

//===============================================================================================//

//                 return this.props.dispatch(editSingleContentPost(postID))

let categoriesArr = [];

class EditContentPost extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            redirectToHome: false,
            checkingLogin: true,
            categoryListOpen: false,
            userLocation: '',
            contentSummary: '',
            contentDescription: '',
            contentIdealMatch: '',
            contentTags: '',
            contentCategories: [],
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.openCategoryIndicator = this.openCategoryIndicator.bind(this);
        this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
        // this.youtubeForm = this.youtubeForm.bind(this);
    }


    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        if (result !== 'OK') {
                            alert('You are not logged in. Please login or register before making a new listing.');
                            return this.setState({ redirectToHome: true });
                        }
                        return this.setState({ checkingLogin: false });
                    });
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();


        // NOTE: need to make a rule for when random characters entered after /contentPost/....

        // get current url and extract id number. Query database for this primary key and return all relevant information
        let postID = this.props.location.pathname.match(/\d+/)[0];
        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then((data) => {
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    console.log(data);
                    return this.setState({
                        userLocation: data[0]['user_location'],
                        contentSummary: data[0]['content_summary'],
                        contentDescription: data[0]['content_description'],
                        contentIdealMatch: data[0]['content_ideal_match'],
                        contentTags: data[0]['content_tags'],
                        contentCategories: data[0]['content_categories']
                    });
                })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state);
            return this.setState({loadingComponent: false})
        }, 1000);
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


    // youtubeForm() {
    //     if (!this.state.showYouTubeForm) {
    //         return;
    //     }
    //     return <YoutubeForm />
    // }




    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        if (this.state.redirectToHome) {
            return <Redirect push to="/contentCreatorsList"/>
        }

        return (
            <div>
                <h2>
                    Edit post?
                </h2>
                <div className="singleContentPostContainer">

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
                                style={{minHeight: "60px"}}
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
                                style={{minHeight: "60px"}}
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
                    </Form>

                    {/* Import social media specific forms */}
                    <YoutubeForm />


                    <Button bsStyle="success"
                        // onClick={this.onReviewForNextStep}
                    >
                        Update!
                    </Button>


                    <Button bsStyle="warning">
                        <Link to="/profile">
                            Jump to profile
                        </Link>
                    </Button>
                    &nbsp;
                    <Button bsStyle="warning">
                        <Link to="/contentCreatorsList">
                            Jump to content creators list
                        </Link>
                    </Button>

                </div>
            </div>
        )
    }
}

export default connect(null)(EditContentPost);


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
        newContentPost: state.newContentPost.newContentPost
    };
}
