import {combineReducers} from 'redux';
import newContentPost from './newContentPost';
import contentPosts from './contentPosts';

const allReducers = combineReducers({
    newContentPost: newContentPost,
    contentPosts: contentPosts,
});

export default allReducers;