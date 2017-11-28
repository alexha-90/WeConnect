import axios from 'axios';
import store from '../index';
//===============================================================================================//

export const newContentPostToProps = (newContentPostInfo) => {
    return {
        type: "NEW_CONTENT_POST_TO_PROPS",
        payload: newContentPostInfo
    };
};

// axios POST request to submit information into database
export const saveNewContentPost = (newContentPostInfo) => async dispatch => {
    try {
        const res = await axios.post('api/saveNewTask',
            dispatch({
                type: 'SUBMIT_NEW_CONTENT_POST_TO_DB',
                payload: newContentPostInfo
            })
        );

        if (res.data === 'Error!') {
            return alert('Error: Your post was not submitted. Please try again and let us know if this problem persists.')
        }
        return alert('Your post was successfully posted!');

    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};


// axios request to retrieve all content posts
export const fetchAllContentPosts = () => async () => {
    try {
        const res = await axios.get('/api/getAllContentPosts');
        return store.dispatch({
            type: 'ALL_CONTENT_POSTS_TO_REDUX_STATE',
            payload: res.data
        });

    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};


// axios request to retrieve one expanded content post
export const fetchSingleContentPost = (postID) => async dispatch => {
    console.log(postID);
    try {
        const res = await axios.post('/api/getSingleContentPost',
            dispatch({
                type: 'GET_SINGLE_CONTENT_POST',
                payload: postID
            })
        );

        await console.log(res.data);

        if (res.data === 'Error!') {
            return alert('Error: No match found for the ID number you provided was not found. Please check your input, try again, and let us know if this problem persists.')
        }

        return store.dispatch({
            type: 'SINGLE_CONTENT_POST_TO_REDUX_STATE',
            payload: res.data
        });

    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};