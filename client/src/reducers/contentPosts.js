const contentPosts = (state = {
    contentPostDetails: {}
    }, action) => {

    switch (action.type) {
        case 'ALL_CONTENT_POSTS_TO_PROPS': {
            return {
                ...state,
                contentPostDetails: action.payload
            };
        }

        case 'EDIT_POST_DETAILS_TO_PROPS': {
            return {
                ...state,
                contentPostDetails: action.payload
            };
        }

        default: {
            return state;
        }
    }

};

export default contentPosts