import axios from 'axios';
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

export const editPostDetailsToProps = (data) => {
    // console.log(data);
    return {
        type: 'EDIT_POST_DETAILS_TO_PROPS',
        payload: data
    };
};


export const updateSingleContentPost = (editedPost) => async () => {
    // console.log(editedPost);
    try {
        const res = await axios.patch('/api/saveEditedPost', editedPost);
        return res.data;
    } catch(res) {
        return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
    }
};

export const deleteContentPost = (postID) => async () => {
    try {
        const res = await axios.post('/api/deleteContentPost', postID);
        return res.data;
    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};