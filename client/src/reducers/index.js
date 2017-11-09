import {combineReducers} from 'redux';
import newTaskReducer from './newTaskReducer';


const allReducers = combineReducers({
    newTask: newTaskReducer
});

export default allReducers;