import store from '../index';
import axios from 'axios';

export const newTaskToProps = (newTaskInfo) => {
    return {
        type: "SUBMIT_NEW_TASK",
        payload: newTaskInfo
    };
};

// axios POST request to submit information into database
// refactor later. doesn't seem like req or res is required here.
export const newTaskPOST = (newTaskInfo) => async dispatch => {
    try {
        const res = await axios.post('api/saveNewTask',
            dispatch({
                type: 'SUBMIT_NEW_TASK_TO_DB',
                payload: newTaskInfo
            })
        );
        await console.log('reSpoNse from server: ' + res.data);
        return await console.log('New task submitted');
        
    } catch(res) {
        alert('Hmm... it appears something went wrong. Please try submitting another task. Error: ' + res.err)
    }
};