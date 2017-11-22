export function submitNewTask(newTaskData) {
    if (!newTaskData.taskSummary || !newTaskData.taskDescription || !newTaskData.taskCategory) {
        return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
    }

    console.log(newTaskData);
    return newTaskData;
}


// export function submitNewTask(taskSummary, taskValue, taskCategory, taskNeededDate, taskNeededHour, taskDescription) {
