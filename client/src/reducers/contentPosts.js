const contentPosts = (state = {
    contentPostDetails: {}
    }, action) => {

    switch (action.type) {
        case 'EDIT_POST_DETAILS_TO_PROPS': {
            return {
                ...state,
                contentPostDetails: action.payload
            };
        }

        case 'IMAGE_URLS_TO_PROPS': {
            // console.log(action.payload);
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