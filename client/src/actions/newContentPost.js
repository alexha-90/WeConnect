import axios from 'axios';
//===============================================================================================//

export const newContentPostToProps = (contentPostsInfo) => {
    return {
        type: 'NEW_CONTENT_POST_TO_PROPS',
        payload: contentPostsInfo
    };
};

export const youtubeUpdateNewContentPost = (info) => {
    return {
        type: 'YOUTUBE_UPDATE_NEW_CONTENT_POST',
        payload: info
    };
};

export const instagramUpdateNewContentPost = (info) => {
    return {
        type: 'INSTAGRAM_UPDATE_NEW_CONTENT_POST',
        payload: info
    };
};

export const twitterUpdateNewContentPost = (info) => {
    return {
        type: 'TWITTER_UPDATE_NEW_CONTENT_POST',
        payload: info
    };
};

export const snapchatUpdateNewContentPost = (info) => {
    return {
        type: 'SNAPCHAT_UPDATE_NEW_CONTENT_POST',
        payload: info
    };
};

export const youtubeRemoveData = () => {
    return { type: 'REMOVE_YOUTUBE_DATA_ON_SUBMIT' };
};

export const instagramRemoveData = () => {
    return { type: 'REMOVE_INSTAGRAM_DATA_ON_SUBMIT' };
};

export const twitterRemoveData = () => {
    return { type: 'REMOVE_TWITTER_DATA_ON_SUBMIT' };
};

export const snapchatRemoveData = () => {
    return { type: 'REMOVE_SNAPCHAT_DATA_ON_SUBMIT' };
};


// images are uploaded to cloudinary.com via API. No backend here.
export const uploadImages = (url, formData) => async() => {
    try {
        return axios.post(url, formData, { headers: {"X-Requested-With": "XMLHttpRequest"}})
        .then((res) => {
            console.log(res.data);
            return res.data['secure_url']
        })
        .catch(() => {
            return 'error';
        })
    } catch(res) {
        alert('Unable to upload your images. Please try again and let us know if this problem persists.');
    }
};

export const imageArrToProps = (imageArr) => {
    console.log('test');
    return {
        type: 'IMAGE_ARRAY_POST_TO_PROPS',
        payload: imageArr
    };
};


//refactor to remove redux store update
export const saveNewContentPost = (contentPostsInfo, timestamp) => async dispatch => {
    contentPostsInfo.submitted_timestamp = timestamp;
    console.log('*****');
    console.log(contentPostsInfo);
    try {
        const res = await axios.post('/api/saveNewContentPost', contentPostsInfo);
        dispatch({ type: 'SAVE_NEW_CONTENT_POST_TO_DB', payload: res.data });
        return res.data;
    } catch(res) {
        alert('Unable to connect to database. Please try again and let us know if this problem persists.');
    }
};
