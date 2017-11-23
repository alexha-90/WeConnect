import {combineReducers} from 'redux';
import newTaskSource from './newTask';
import allTasksSource from './allTasks';

const allReducers = combineReducers({
    newTaskReducer: newTaskSource,
    allTasksReducer: allTasksSource
});

export default allReducers;