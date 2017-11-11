import {combineReducers} from 'redux';
import newTaskSource from './newTask';


const allReducers = combineReducers({
    newTaskReducer: newTaskSource
});

export default allReducers;