import store from '../index';

export const saveNewTask = (newTaskInfo) => {
    return {
        type: "SUBMIT_NEW_TASK",
        payload: newTaskInfo
    };
};