import axios from 'axios';
import store from '../index';
//===============================================================================================//

export const newContentPostToProps = (newContentPostInfo) => {
    return {
        type: "SUBMIT_NEW_CONTENT_POST",
        payload: newContentPostInfo
    };
};

// axios POST request to submit information into database
export const saveNewContentPost = (newContentPostInfo) => async dispatch => {
    try {
        const res = await axios.post('api/saveNewTask',
            dispatch({
                // don't think type is actually being used here
                type: 'SUBMIT_NEW_CONTENT_POST_TO_DB',
                payload: newContentPostInfo
            })
        );

        if (res.data === 'Error!') {
            return alert('Error: Your post was not submitted. Please try again and let us know if this problem persists.')
        }
        return alert('Your post was successfully received!'); //this will always work regardless

    } catch(res) {
        alert('Error: Unable to establish a connection with database. Please try again and let us know if this problem persists.' + res.err)
    }
};


// axios GET request to retrieve all available tasks
export const allContentPostsGET = () => async dispatch => {
    try {
        const res = await axios.get('api/retrieveAllContentPosts');
        return store.dispatch({ type: 'ALL_CONTENT_POSTS_TO_REDUX_STATE', payload: res.data });

    } catch(res) {
        alert('Hmm... it appears something went wrong. Please try reloading the page. Error: ' + res.err)
    }
};


/*
export const allTasksGET = () => new Promise(() => {
    const res = axios.get('api/retrieveAllTasks');
    console.log('All available tasks from server:');
    return res.data
        .then((data) => {
            //update redux state for display
            console.log(data);
        })
        .catch((res) => {
            alert('Hmm... it appears something went wrong. Please try reloading the page. Error: ' + res.err)
        })
});
 */

