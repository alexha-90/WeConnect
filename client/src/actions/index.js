import axios from 'axios';
import store from '../index';
//===============================================================================================//

export const isLoggedIn = () => async () => {
    try {
        const res = await axios.get('/api/isLoggedIn');
        store.dispatch({
            type: 'AUTHENTICATE_USER',
            payload: res.data
        });
        return res.data;
    } catch(res) {
        alert('Unable to connect to database. Please try again and let us know if this problem persists.');
    }
};


export const loginUser = (emailAddress, password) => async () => {
    console.log(emailAddress, password);
    try {
        const res = await axios.post('/api/loginUser', [emailAddress, password]);
        //     dispatch({
        //         type: 'LOGIN_USER',
        //         payload: emailAddress
        //     })
        // );
        return res.data;
    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};




export const loadProfileData = () => async () => {
    try {
        const res = await axios.get('/api/loadProfileData');
        store.dispatch({
            type: 'LOAD_PROFILE_DATA',
            payload: res.data
        });
        console.log(res.data);
        return res.data;
    } catch(res) {
        alert('Unable to connect to database. Please try again and let us know if this problem persists.');
    }
};


export const newContentPostToProps = (contentPostsInfo) => {
    return {
        type: "NEW_CONTENT_POST_TO_PROPS",
        payload: contentPostsInfo
    };
};

//refactor to remove redux store update
export const saveNewContentPost = (contentPostsInfo) => async dispatch => {
    try {
        const res = await axios.post('api/saveNewContentPost', contentPostsInfo);
        dispatch({ type: 'SAVE_NEW_CONTENT_POST_TO_DB', payload: res.data });
        return res.data;
    } catch(res) {
        alert('Unable to connect to database. Please try again and let us know if this problem persists.');
    }
};


export const fetchAllContentPosts = () => async () => {
    try {
        const res = await axios.get('/api/getAllContentPosts');
        return res.data;
    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};


export const fetchSingleContentPost = (postID) => async () => {
    try {
        const res = await axios.post('/api/getSingleContentPost', postID);
        return res.data;
    } catch(res) {
        return alert('Error: Something went wrong. We are unable to locate this entry. Please try again or notify us if the issue persists.');
    }
};


export const registerNewUser = (newUserData) => async dispatch => {
    console.log(newUserData);
    try {
        const res = await axios.post('/api/saveNewUser',
            dispatch({
                type: 'SAVE_NEW_USER_TO_DB',
                payload: newUserData
            })
        );
        return res.data;
    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};


