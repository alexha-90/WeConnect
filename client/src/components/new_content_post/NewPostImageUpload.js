import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dropzone from 'react-dropzone';
import cloudinary, { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { uploadImages } from '../../actions/newContentPost';
import { isLoggedIn } from '../../actions/auth';

import sha1 from 'sha1';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
//===============================================================================================//

const cloudName = 'dbcmum1bq';
const uploadPreset = 'udi4daeq';

class NewContentPostImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            onNewContentPostFinalReview: false
        };
        this.onUploadImages = this.onUploadImages.bind(this);
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
        // validate file type, size, and max number of images (6)

        const cloudName = 'dbcmum1bq';
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
        const uploadPreset = 'udi4daeq';
        const apiKey = '958649161433688';
        const timestamp = Date.now() / 1000; // required unix timestamp

        const uploads = files.map(file => {
            const formData = new FormData();
            formData.append('upload_preset', uploadPreset);
            formData.append('api_key', apiKey);
            formData.append('file', file);
            formData.append('timestamp', timestamp);
            // formData.append('signature', signature);
            return this.props.dispatch(uploadImages(url, formData))
            .then(() => {
                console.log('test');
            })

            // (async () => {
            //     try {
            //         this.props.dispatch(uploadImages(url, formData));
            //
            //     } catch (err) {
            //         console.log(err);
            //         return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            //     }
            // })();


        });

    }

        //
        // let filesArr = [];
        //
        // for (let i = 0; i < files.length; i++) {
        //     filesArr.push(files[i]);
        // }
        // console.log(filesArr);
        //
        // const cloudName = 'dbcmum1bq';
        // const apiKey = '958649161433688';
        // const uploadPreset = 'udi4daeq';
        // const timestamp = Date.now() / 1000; // required unix timestamp
        //
        //
        // const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
        // const paramsSig = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'xhoBKYCuqTIl78IIbp3MATDfAzQ';
        // const signature = sha1(paramsSig);
        // const params = {
        //     timestamp: timestamp,
        //     api_key: apiKey,
        //     upload_preset: uploadPreset,
        //     signature: signature
        // };
        //
        // console.log(params);




        /*

        The final request parameters for the upload POST request:

timestamp: 1315060510
public_id: "sample_image"
api_key: "1234"
file: "http://www.example.com/sample.jpg"
signature: "b4ad47fb4e25c7bf5f92a20089f9db59bc302313"



                let fd = new FormData();
        fd.append('upload_preset', uploadPreset);
        fd.append('signature', signature);
        fd.append('file', file);

        console.log(fd);




        */


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


                    <CloudinaryContext cloudName={cloudName}>

                    </CloudinaryContext>

                    {/*<img name="temp1" width="400px" height="300px" alt="temp1" src="https://images.unsplash.com/photo-1483383490964-8335c18b6666?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />*/}
                    {/*<img name="temp2" width="400px" height="300px" alt="temp2" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />*/}
                    {/*<form>*/}
                        {/*<input type="file"*/}
                            {/*id="formControlsFile"*/}
                            {/*label="File"*/}
                            {/*multiple="multiple"*/}
                            {/*onChange={this.onUploadImages}*/}
                        {/*/>*/}
                    {/*</form>*/}

                    <Dropzone
                        onDrop={this.onUploadImages}
                        accept='image/*'
                        multiple
                    >
                        <p>Click here or drag images into box to upload images.</p>
                    </Dropzone>

                    <hr/>

                    <Button bsStyle="warning">
                        <Link to="/newContentPost/mediums">
                            Back to previous page (Step 2/5)
                        </Link>
                    </Button>

                    <Button id="contentMediumsGoBack" bsStyle="success" onClick={() => this.setState({ onNewContentPostFinalReview: true })}>
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
//
//
//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
// import Dropzone from 'react-dropzone';
// import sha1 from 'sha1';
//
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css';
// import Steps, { Step } from 'rc-steps';
// //===============================================================================================//
//
// class NewContentPostImageUpload extends Component {
//     constructor() {
//         super();
//         this.state = {
//             onNewContentPostFinalReview: false
//         };
//         this.onUploadImages = this.onUploadImages.bind(this);
//     }
//
//     componentWillMount() {
//         setTimeout(() => {
//             if (!this.props.auth.isLoggedIn) {
//                 alert('You are not logged in. Please login or register before making a new listing.');
//                 return this.setState({ redirectToContentCreatorsList: true });
//             }
//             return this.setState({ checkingLogin: false });
//         },500);
//     }
//
//     onUploadImages(files) {
//         // validate file type, size, and max number of images (6)
//
//         let filesArr = [];
//
//         for (let i = 0; i < files.length; i++) {
//             filesArr.push(files[i]);
//         }
//         console.log(filesArr);
//
//         const cloudName = 'dbcmum1bq';
//         const apiKey = '958649161433688';
//         const uploadPreset = 'udi4daeq';
//         const timestamp = Date.now() / 1000; // required unix timestamp
//
//
//         const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
//         const paramsSig = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'xhoBKYCuqTIl78IIbp3MATDfAzQ';
//         const signature = sha1(paramsSig);
//         const params = {
//             timestamp: timestamp,
//             api_key: apiKey,
//             upload_preset: uploadPreset,
//             signature: signature
//         };
//
//         console.log(params);
//
//
//
//
//         /*
//
//         The final request parameters for the upload POST request:
//
// timestamp: 1315060510
// public_id: "sample_image"
// api_key: "1234"
// file: "http://www.example.com/sample.jpg"
// signature: "b4ad47fb4e25c7bf5f92a20089f9db59bc302313"
//
//
//
//                 let fd = new FormData();
//         fd.append('upload_preset', uploadPreset);
//         fd.append('signature', signature);
//         fd.append('file', file);
//
//         console.log(fd);
//
//
//
//
//         */
//
//     }
//
//     render() {
//         if (this.state.onNewContentPostFinalReview) {
//             return <Redirect push to="/newContentPost/review" />;
//         }
//
//         return (
//             <div>
//                 <div id="stepComponent">
//                     <Steps labelPlacement="vertical" current={2}>
//                         <Step title="Description" />
//                         <Step title="Mediums" />
//                         <Step title="Images" />
//                         <Step title="Review" />
//                         <Step title="Submit!" />
//                     </Steps>
//                 </div>
//
//                 <div className="newContentPostContainer">
//                     <h1>Upload images:</h1>
//
//                     {/*<img name="temp1" width="400px" height="300px" alt="temp1" src="https://images.unsplash.com/photo-1483383490964-8335c18b6666?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />*/}
//                     {/*<img name="temp2" width="400px" height="300px" alt="temp2" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />*/}
//                     {/*<form>*/}
//                     {/*<input type="file"*/}
//                     {/*id="formControlsFile"*/}
//                     {/*label="File"*/}
//                     {/*multiple="multiple"*/}
//                     {/*onChange={this.onUploadImages}*/}
//                     {/*/>*/}
//                     {/*</form>*/}
//
//                     <Dropzone
//                         onDrop={this.onUploadImages}>
//                         <p>Click here or drag images into box to upload images.</p>
//                     </Dropzone>
//
//                     <hr/>
//
//                     <Button bsStyle="warning">
//                         <Link to="/newContentPost/mediums">
//                             Back to previous page (Step 2/5)
//                         </Link>
//                     </Button>
//
//                     <Button id="contentMediumsGoBack" bsStyle="success" onClick={() => this.setState({ onNewContentPostFinalReview: true })}>
//                         Proceed to review (Step 4/5)
//                     </Button>
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default connect(mapStateToProps)(NewContentPostImageUpload);
//
// function mapStateToProps(state) {
//     return {
//         newContentPost: state.newContentPost.newContentPost,
//         auth: state.auth.auth
//     };
// }