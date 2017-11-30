import axios from 'axios';
import store from '../index';
//===============================================================================================//

export const newContentPostToProps = (contentPostsInfo) => {
    return {
        type: "NEW_CONTENT_POST_TO_PROPS",
        payload: contentPostsInfo
    };
};

// axios POST request to submit new contentPost into database
export const saveNewContentPost = (contentPostsInfo) => async dispatch => {
    try {
        const res = await axios.post('api/saveNewContentPost',
            dispatch({
                type: 'SAVE_NEW_CONTENT_POST_TO_DB',
                payload: contentPostsInfo
            })
        );

        if (res.data === 'Error!') {
            return alert('Error: Your post was not submitted. Please try again and let us know if this problem persists.')
        }
        return res.data;

    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};


// axios request to retrieve all contentPosts
export const fetchAllContentPosts = () => async () => {
    try {
        const res = await axios.get('/api/getAllContentPosts');
        return store.dispatch({
            type: 'ALL_CONTENT_POSTS_TO_PROPS',
            payload: res.data
        });

    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};


// axios request to retrieve one expanded contentPost
export const fetchSingleContentPost = (postID) => async dispatch => {
    try {
        const res = await axios.post('/api/getSingleContentPost',
            dispatch({
                type: 'GET_SINGLE_CONTENT_POST',
                payload: postID
            })
        );

        if (res.data === 'Error!') {
            return alert('Error: No match found for the ID number you provided was not found. Please check your input, try again, and let us know if this problem persists.')
        }

        return store.dispatch({
            type: 'SINGLE_CONTENT_POST_TO_PROPS',
            payload: res.data
        });

    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};


// axios POST request to save new user into database
export const registerNewUser = (newUserData) => async dispatch => {
    console.log(newUserData);
    try {
        const res = await axios.post('/api/saveNewUser',
            dispatch({
                type: 'SAVE_NEW_USER_TO_DB',
                payload: newUserData
            })
        );

        if (res.data === 'Error!') {
            return alert('Error: Your account was not registered. Please try again and let us know if this problem persists.')
        }
        return res.data;

    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};


