import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
// import {testNewTaskValidity} from "../../stateFunctions";
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { youtubeData, instagramData, twitterData, snapchatData, uploadedImages } from '../helper_functions/newContentHelpers';
import { saveNewContentPost } from '../../actions/newContentPost';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

//===============================================================================================//

class NewContentPostFinalReview extends Component {
    constructor() {
        super();
        this.state = {
            redirectToContentCreatorsList: false
        };
        this.onSubmitNewContentPost = this.onSubmitNewContentPost.bind(this);
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


    componentDidMount() {
        // Needs work.... Run function for unit test. Ensure information to be submitted is accurate. Currently always proceeds regardless. Fix
        // testNewTaskValidity(this.props.new_content_post)
    }

    onSubmitNewContentPost() {
        let timestamp = moment().format("MM/DD/YYYY") + ' at ' + moment().utcOffset(-480).format('hh:mm a') + ' PST';
        (async () => {
            try {
                return this.props.dispatch(saveNewContentPost(this.props.newContentPost, timestamp))
                .then((result) => {
                    console.log(result);
                    if (result === 'OK') {
                        alert('Your post was successfully submitted!');
                        return this.setState({redirectToContentCreatorsList: true})
                    }
                    return alert('Error: Your post was not submitted. Please try again and let us know if this problem persists.');
                })
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    render() {
        if (this.state.redirectToContentCreatorsList) {
            return <Redirect push to="/contentCreatorsList" />;
        }

        return (
            <div>
                <div id="stepComponent">
                    <Steps labelPlacement="vertical" current={4}>
                        <Step title="Description" />
                        <Step title="Mediums" />
                        <Step title="Images" />
                        <Step title="Review" />
                        <Step title="Submit!" />
                    </Steps>
                </div>


                <div className="newContentPostContainer">
                    <div className="contentMediumsPropsInfo">
                        <h1>Review before submitting:</h1>
                        <ul>
                            <li><span>User location:</span> {this.props.newContentPost.userLocation}</li>
                            <li><span>Content summary:</span> {this.props.newContentPost.contentSummary}</li>
                            <li><span>Content description:</span> {this.props.newContentPost.contentDescription}</li>
                            <li><span>Content ideal match:</span> {this.props.newContentPost.contentIdealMatch}</li>
                            <li><span>Content tags:</span> {this.props.newContentPost.contentTags}</li>
                            {/*<li><span>Content categories:</span> {this.props.new_content_post.contentCategories.join(', ')}</li>*/}
                        </ul>
                    </div>

                    <hr/>

                    {youtubeData(this.props)}
                    {instagramData(this.props)}
                    {twitterData(this.props)}
                    {snapchatData(this.props)}

                    {uploadedImages(this.props.newContentPost.imagesArr)}

                    <br />
                    <br />

                    <Button bsStyle="warning">
                        <Link to="/newContentPost/images">
                            Need to make change(s)? Back to previous page (Step 3/5)
                        </Link>
                    </Button>


                    <Button id="contentMediumsGoBack" bsStyle="success" onClick={this.onSubmitNewContentPost}>
                        Submit! (Step 5/5)
                    </Button>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NewContentPostFinalReview);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        auth: state.auth.auth
    };
}
