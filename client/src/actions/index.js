import store from '../index';

export const submitNewTask = (newTaskInfo) => {
    return {
        type: "SUBMIT_NEW_TASK",
        payload: newTaskInfo
    };
};