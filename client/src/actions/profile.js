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