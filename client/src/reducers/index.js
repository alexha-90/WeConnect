import {combineReducers} from 'redux';
import newContentPost from './newContentPost';
import contentPosts from './contentPosts';
import userProfile from './userProfile';

const allReducers = combineReducers({
    newContentPost: newContentPost,
    contentPosts: contentPosts,
    userProfile: userProfile
});

export default allReducers;