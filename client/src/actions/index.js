import axios from 'axios';
import store from '../index';
//===============================================================================================//

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

export const editSingleContentPost = (postID) => async () => {
    console.log(postID);
    try {
        const res = await axios.patch('/api/editSingleContentPost', postID);
        return res.data;
    } catch(res) {
        return alert('Error: Something went wrong. We are unable to locate this entry. Please try again or notify us if the issue persists.');
    }
};


export const newPrivateMessage = (message) => async () => {
    console.log(message);
    try {
        const res = await axios.post('/api/newPrivateMessage', message);
        return res.data;
    } catch(res) {
        return alert('Error: Something went wrong. We are unable to locate this entry. Please try again or notify us if the issue persists.');
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
        console.log(res);
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


