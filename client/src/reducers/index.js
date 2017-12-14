import {combineReducers} from 'redux';
import newContentPost from './newContentPost';
import contentPosts from './contentPosts';
import privateMessage from './privateMessages';
import auth from './auth';

const allReducers = combineReducers({
    newContentPost: newContentPost,
    contentPosts: contentPosts,
    privateMessage: privateMessage,
    auth: auth
});

export default allReducers;