const newTaskSource = (state ={
    //change values below to null after testing done
    newTask: {
        taskSummary: '',
        taskValue: 0,
        taskCategory: '',
        taskNeededDate: '',
        taskNeededHour: '',
        taskDescription: ''
    }}, action) => {

    switch (action.type) {
        case "SUBMIT_NEW_TASK": {
            console.log(action.payload);
            return {
                newTask: {
                    taskSummary: action.payload.taskSummary,
                    taskValue: action.payload.taskValue,
                    taskCategory: action.payload.taskCategory,
                    taskNeededDate: action.payload.taskNeededDate,
                    taskNeededHour: action.payload.taskNeededHour,
                    taskDescription: action.payload.taskDescription
                }
            }
        }

        default: {
            return state;
        }
    }

};

export default newTaskSource