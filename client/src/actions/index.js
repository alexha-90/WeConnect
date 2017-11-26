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
        await console.log('reSpoNse from server: ' + res.data);
        return await console.log('New task submitted');

    } catch(res) {
        alert('Hmm... it appears something went wrong. Please try submitting another task. Error: ' + res.err)
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

