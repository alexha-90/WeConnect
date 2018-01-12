/* multiple attempts couldn't get this working. function runs twice for some reason and returns undefined values second time. See line 18
import { uploadImages } from '../../actions/newContentPost';
//===============================================================================================//

export function handleUpload (files, state, props) {
    // console.log(files);
    let imagesArr = [];
    const filesLen = files.length;
    // let filesArr = files;

    if (imagesArr.length > 3) {
        return alert('You can only upload a maximum of four images. Please delete existing image(s) to make space (Work in progress)');
    }

    let validType = false;
    let validSize = false;

    console.log(filesLen);

    // files.map(image => {
    //     if (image.type === 'image/png' || image.type === 'image/gif' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
    //         validType = true;
    //     }
    //
    //     if (image.size < 5242880) {
    //         validSize = true;
    //     }
    //     return '';
    // });
    //
    // if (!validType) {
    //     return alert('You attempted to upload an unsupported file type. We only allow: .jpeg, .jpg, .png, .gif');
    // }
    //
    // if (!validSize) {
    //     return alert('One or more of your images exceeds our 5MB file size limit. Please select other image(s)');
    // }

    // const cloudName = 'dbcmum1bq';
    // const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
    // const uploadPreset = 'udi4daeq';
    // const apiKey = '958649161433688';
    // const timestamp = Date.now() / 1000; // required unix timestamp
    //
    // files.map(file => {
    //     const formData = new FormData();
    //     formData.append('upload_preset', uploadPreset);
    //     formData.append('api_key', apiKey);
    //     formData.append('file', file);
    //     formData.append('timestamp', timestamp);
    //     formData.append('tags', [props.auth.username, state.uploadCount]); // username as identifier
    //     return props.dispatch(uploadImages(url, formData))
    //         .then((imageURL) => {
    //             if (imageURL === 'error') {
    //                 return alert ('Something went wrong. Please notify us about this issue.');
    //             }
    //             return imagesArr.push([imageURL, state.uploadCount]);
    //         })
    // });
    // return imagesArr;
    return 5;
}

*/