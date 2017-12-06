const newContentPost = (state ={
    newContentPost: {}
    }, action) => {

    switch (action.type) {
        case 'NEW_CONTENT_POST_TO_PROPS': {
            console.log(action.payload);
            return {
                newContentPost: {
                    userLocation: action.payload.userLocation,
                    contentSummary: action.payload.contentSummary,
                    contentDescription: action.payload.contentDescription,
                    contentIdealMatch: action.payload.contentIdealMatch,
                    contentTags: action.payload.contentTags,
                    contentCategories: action.payload.contentCategories,
                    youtube: {
                        yt_UploadFrequency: null,
                        yt_VideoLength: null,
                        yt_SubCount: null,
                        yt_ViewCount: null
                    },
                    instagram: {
                        ig_PostFrequency: null,
                        ig_Followers: null,
                        yt_SubCount: null,
                        yt_ViewCount: null
                    },
                    twitter: {
                        yt_UploadFrequency: null,
                        yt_VideoLength: null,
                        yt_SubCount: null,
                        yt_ViewCount: null
                    },
                    snapchat: {
                        yt_UploadFrequency: null,
                        yt_VideoLength: null,
                        yt_SubCount: null,
                        yt_ViewCount: null
                    },
                }
            }
        }

        case 'YOUTUBE_UPDATE_NEW_CONTENT_POST': {
            return {
                newContentPost: {
                    ...state.newContentPost,
                    youtube: {
                        yt_UploadFrequency: action.payload.yt_UploadFrequency,
                        yt_VideoLength: action.payload.yt_VideoLength,
                        yt_SubCount: action.payload.yt_SubCount,
                        yt_ViewCount: action.payload.yt_ViewCount
                    }
                }

            }
        }




        // case 'YOUTUBE_UPDATE_NEW_CONTENT_POST': {
        //     return {
        //             ...state,
        //             youtube: {
        //                 yt_UploadFrequency: action.payload.yt_UploadFrequency,
        //                 yt_VideoLength: action.payload.yt_VideoLength,
        //                 yt_SubCount: action.payload.yt_SubCount,
        //                 yt_ViewCount: action.payload.yt_ViewCount
        //             }
        //
        //     }
        // }


        default: {
            return state;
        }
    }

};

export default newContentPost