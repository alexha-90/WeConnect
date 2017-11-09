const newTaskReducer = (state ={
    newTask: {
        taskHeadline: '',
        taskValue: 0,
        taskCategory: '',
        taskNeededDate: '',
        taskNeededHour: '',
        taskDescription: ''

    }}, action) => {

    switch (action.type) {
        case "SUBMIT_NEW_TASK": {
            return {
                newTask: {
                    taskHeadline: action.payload[0],
                    taskValue: action.payload[1],
                    taskCategory: action.payload[2],
                    taskNeededDate: action.payload[3],
                    taskNeededHour: action.payload[4],
                    taskDescription: action.payload[5]
                }
            }
        }

        default: {
            return state;
        }
    }

};


export default newTaskReducer