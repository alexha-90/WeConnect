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
        const res = await axios.post('api/saveNewContentPost', contentPostsInfo);
        dispatch({ type: 'SAVE_NEW_CONTENT_POST_TO_DB', payload: res.data });
        return res.data;
    } catch(res) {
        alert('Unable to connect to database. Please try again and let us know if this problem persists.');
    }
};


// axios request to retrieve all contentPosts
// this can be refactored later to return res.data and pass this information back to the component
// instead of setting to redux state
// currently does not do anything with 'error' returned from backend
export const fetchAllContentPosts = () => async () => {
    try {
        const res = await axios.get('/api/getAllContentPosts');
        store.dispatch({
            type: 'ALL_CONTENT_POSTS_TO_PROPS',
            payload: res.data
        });
        console.log(res.data);

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

        if (res.data === 'error') {
            return 'error';
        }
        return store.dispatch({
            type: 'SINGLE_CONTENT_POST_TO_PROPS',
            payload: res.data
        });
    } catch(res) {
        return alert('Error: Something went wrong. We are unable to locate this entry. Please try again or notify us if the issue persists.');
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

        if (res.data === 'error') {
            return alert('Error encountered. Please try again and let us know if this problem persists.')
        }
        return res.data;

    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};


