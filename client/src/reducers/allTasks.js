const allTasksSource = (state ={
    claimedTasks: {
        taskSummary: '',
        taskValue: 0,
        taskCategory: '',
        taskNeededDate: '',
        taskNeededHour: '',
        taskDescription: ''
    },
    availableTasks: {
        taskSummary: '',
        taskValue: 0,
        taskCategory: '',
        taskNeededDate: '',
        taskNeededHour: '',
        taskDescription: ''
    }
    }, action) => {

    switch (action.type) {
        case "ALL_TASKS_TO_REDUX_STATE": {

            console.log(action.payload, '****');
            /*
            implement pseudo-code later when claimed status implemented
            //if (claimed) {
                claimedTasks: {action.payload.claimed}
            }

            if (!claimed) {
                availableTasks {action.payload.notClaimed}
            }

            return claimedTasks, availableTasks
             */


            return {
                ...state,
                availableTasks: action.payload
            };
        }

        default: {
            return state;
        }
    }

};

export default allTasksSource