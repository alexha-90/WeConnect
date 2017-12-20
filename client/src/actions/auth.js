import axios from 'axios';
import store from '../index';
//===============================================================================================//

export const isLoggedIn = () => async () => {
    try {
        const res = await axios.get('/api/isLoggedIn');
        store.dispatch({
            type: 'CHANGE_LOGIN_STATUS',
            payload: res.data
        });
        return res.data;
    } catch(res) {
        console.log(res);
        alert('Something went wrong. Please try again and let us know if this problem persists.');
    }
};

// export const isLoggedIn = () => async () => {
//     try {
//         const res = await axios.get('/api/isLoggedIn');
//         store.dispatch({
//             type: 'AUTHENTICATE_USER',
//             payload: res.data
//         });
//         return res.data;
//     } catch(res) {
//         alert('Unable to connect to database. Please try again and let us know if this problem persists.');
//     }
// };


export const loginUser = (emailAddress, password) => async () => {
    try {
        const res = await axios.post('/api/loginUser', [emailAddress, password]);
        console.log(res.data);
        return res.data;
    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};


export const logoutUser = () => async () => {
    try {
        const res = await axios.get('/api/logoutUser');
        if (res.data === 'error') {
            return alert ('Logout did not work. Please try again or contact us if this problem persists');
        }
        store.dispatch({
            type: 'CHANGE_LOGIN_STATUS',
            payload: res.data
        });
        console.log('logged out!');
    } catch(res) {
        alert('Error: Something went wrong on the server-side. Please try again and let us know if this problem persists.' + res.err)
    }
};

export const fetchUserID = () => async () => {
    try {
        const res = await axios.get('/api/fetchUserID');
        return res.data;
    } catch(res) {
        console.log(res);
    }
};