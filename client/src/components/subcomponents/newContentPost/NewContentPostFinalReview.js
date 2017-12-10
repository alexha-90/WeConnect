import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
// import {testNewTaskValidity} from "../../stateFunctions";
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { youtubeData, instagramData, twitterData, snapchatData } from '../../helper_functions/newContentHelpers';
import { isLoggedIn } from '../../../actions/auth';
import { saveNewContentPost } from '../../../actions/newContentPost';

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


    componentDidMount() {
        // Needs work.... Run function for unit test. Ensure information to be submitted is accurate. Currently always proceeds regardless. Fix
        // testNewTaskValidity(this.props.newContentPost)
    }

    onSubmitNewContentPost() {
        let timestamp = moment().format("MM/DD/YYYY") + ' ' + moment().utcOffset(-480).format('hh:mm a') + ' PST';
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
        console.log(this.props.newContentPost);

        return (
            <div className="newContentPostContainer">
                <h1>Review before submitting</h1>

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

                {youtubeData(this.props)}
                {instagramData(this.props)}
                {twitterData(this.props)}
                {snapchatData(this.props)}


                <img name="temp1" width="400px" height="300px" alt="temp1" src="https://images.unsplash.com/photo-1483383490964-8335c18b6666?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                <img name="temp2" width="400px" height="300px" alt="temp2" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />

                <Button bsStyle="success"
                        onClick={this.onSubmitNewContentPost}
                >
                    Submit!
                </Button>


                <Button id="contentMediumsGoBack" bsStyle="warning">
                    <Link to="/newContentPost/images">
                        Need to make change(s)? Go back to previous page (Step 3/4)
                    </Link>
                </Button>

            </div>
        );
    }
}

export default connect(mapStateToProps)(NewContentPostFinalReview);

function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}
