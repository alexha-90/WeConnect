import {combineReducers} from 'redux';
import newContentPost from './newContentPost';
import allContentPosts from './allContentPosts';

const allReducers = combineReducers({
    newContentPost: newContentPost,
    allContentPosts: allContentPosts
});

export default allReducers;