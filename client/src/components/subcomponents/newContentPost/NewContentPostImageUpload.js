import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

//===============================================================================================//

class NewContentPostImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            onNewContentPostFinalReview: false
        };
    }

    render() {
        if (this.state.onNewContentPostFinalReview) {
            return <Redirect push to="/newContentPost/review" />;
        }


        // if this.props for youtube, instagram, twitter, snapchat, return below.


        return (
            <div className="newContentPostContainer">
                <h1>Upload images TBD</h1>
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