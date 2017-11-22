import store from '../index';

export const newTaskToProps = (newTaskInfo) => {
    return {
        type: "SUBMIT_NEW_TASK",
        payload: newTaskInfo
    };
};