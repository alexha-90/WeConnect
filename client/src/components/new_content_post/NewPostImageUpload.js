import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dropzone from 'react-dropzone';
import { uploadImages, imageArrToProps } from '../../actions/newContentPost';
import { uploadedImages } from '../helper_functions/newContentHelpers';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

// to-do: array length counter is messed up. No limit if uploaded all at once.
// need to mask credentials
//===============================================================================================//

let imagesArr = [];

class NewContentPostImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            onNewContentPostFinalReview: false,
            uploadCount: 0,
            hasUploadedImage: false,
        };
        this.onUploadImages = this.onUploadImages.bind(this);
        this.onNextStep = this.onNextStep.bind(this);
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

    onUploadImages(files) {
        if (imagesArr.length > 3) {
            return alert('You can only upload a maximum of four images. Please delete existing image(s) to make space (Work in progress)');
        }

        let validType = false;
        let validSize = false;

        files.map(image => {
            if (image.type === 'image/png' || image.type === 'image/gif' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
                validType = true;
            }

            if (image.size < 5242880) {
                validSize = true;
            }
            return '';
        });

        if (!validType) {
            return alert('You attempted to upload an unsupported file type. We only allow: .jpeg, .jpg, .png, .gif');
        }

        if (!validSize) {
            return alert('One or more of your images exceeds our 5MB file size limit. Please select other image(s)');
        }

        const cloudName = 'dbcmum1bq';
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
        const uploadPreset = 'udi4daeq';
        const apiKey = '958649161433688';
        const timestamp = Date.now() / 1000; // required unix timestamp

        files.map(file => {
            const formData = new FormData();
            formData.append('upload_preset', uploadPreset);
            formData.append('api_key', apiKey);
            formData.append('file', file);
            formData.append('timestamp', timestamp);
            formData.append('tags', [this.props.auth.username, this.state.uploadCount]); // username as identifier
            return this.props.dispatch(uploadImages(url, formData))
                .then((imageURL) => {
                    if (imageURL === 'error') {
                        return alert ('Something went wrong. Please notify us about this issue.');
                    }
                    imagesArr.push([imageURL, this.state.uploadCount]);
                    return this.setState({ hasUploadedImage: true, uploadCount: this.state.uploadCount + 1 });
                })
        });
    }

    onNextStep() {
        if (imagesArr.length) {
            this.props.dispatch(imageArrToProps(imagesArr));
        }
        console.log(this.props);
        return this.setState({ onNewContentPostFinalReview: true })
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
                    <h1>Upload images:</h1>

                    <Dropzone
                        onDrop={this.onUploadImages}
                        accept='image/*'
                        multiple
                        id="dropzone"
                    >
                        <p>*****<br/>Click here or drag images into box to initiate upload<span>*****</span></p>
                    </Dropzone>

                    {uploadedImages(imagesArr)}

                    <hr/>

                    <Button bsStyle="warning">
                        <Link to="/newContentPost/mediums">
                            Back to previous page (Step 2/5)
                        </Link>
                    </Button>

                    <Button id="contentMediumsGoBack" bsStyle="success" onClick={this.onNextStep}>
                        Proceed to review (Step 4/5)
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