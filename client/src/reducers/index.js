import {combineReducers} from 'redux';
import newContentPost from './newContentPost';
import contentPosts from './contentPosts';
import newUser from './newUser';

const allReducers = combineReducers({
    newContentPost: newContentPost,
    contentPosts: contentPosts,
    newUser: newUser
});

export default allReducers;