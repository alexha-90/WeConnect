import {combineReducers} from 'redux';
import newContentPost from './newContentPost';
import getContentPosts from './getContentPosts';

const allReducers = combineReducers({
    newContentPost: newContentPost,
    getContentPosts: getContentPosts
});

export default allReducers;