export function testNewTaskValidity(newTaskData) {
    if (Object.keys(newTaskData).length !== 7) {
        return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
    }
    return newTaskData
}