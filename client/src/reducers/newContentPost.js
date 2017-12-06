const newContentPost = (state ={
    //change values below to null after testing done
    newContentPost: {}}
    , action) => {

    switch (action.type) {
        case 'NEW_CONTENT_POST_TO_PROPS': {
            console.log(action.payload);
            return {
                newContentPost: {
                    contentSummary: action.payload.contentSummary,
                    contentDescription: action.payload.contentDescription,
                    contentIdealMatch: action.payload.contentIdealMatch,
                    contentTags: action.payload.contentTags,
                    contentCategories: action.payload.contentCategories,
                }
            }
        }

        case 'YOUTUBE_UPDATE_NEW_CONTENT_POST': {
            return {
                newContentPost: {
                    ...state,
                    youtube: {
                        yt_UploadFrequency: action.payload.yt_UploadFrequency,
                        yt_VideoLength: action.payload.yt_VideoLength,
                        yt_SubCount: action.payload.yt_SubCount,
                        yt_ViewCount: action.payload.yt_ViewCount
                    }
                }
            }
        }


        default: {
            return state;
        }
    }

};

export default newContentPost