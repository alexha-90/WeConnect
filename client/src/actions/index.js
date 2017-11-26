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
                type: 'SUBMIT_NEW_TASK_TO_DB',
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
export const allTasksGET = () => async dispatch => {
    try {
        const res = await axios.get('api/retrieveAllTasks');
        return store.dispatch({ type: "ALL_TASKS_TO_REDUX_STATE", payload: res.data });

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

