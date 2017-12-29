import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';

import { editSingleContentPost } from '../../actions';

// this might not be used

//===============================================================================================//


class EditContentPostForm extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            categoryListOpen: true,
            contentPost: []
        };
    }




    render () {
        return (
            <div>
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

                    <Button bsStyle="success"
                            // onClick={this.onReviewForNextStep}
                    >
                        Proceed - Select your content mediums (Step 2/4)
                    </Button>
                </Form>
            </div>
        )
    }



}

export default connect(mapStateToProps)(EditContentPostForm);


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

