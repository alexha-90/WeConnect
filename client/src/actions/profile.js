import axios from 'axios';
//===============================================================================================//
export const loadProfileData = () => async () => {
    try {
        const res = await axios.get('/api/loadProfileData');
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

export const privateMessageIDsToProps = (postID, posterID, userID, postSummary, posterUsername, username) => {
    // console.log(postID, posterID, userID, postSummary, posterUsername, username);
    return {
        type: 'PM_IDS_TO_PROPS',
        payload: [postID, posterID, userID, postSummary, posterUsername, username]
    };
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