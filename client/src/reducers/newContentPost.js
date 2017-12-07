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
                        ig_Likes: null,
                        ig_Comments: null
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

        case 'INSTAGRAM_UPDATE_NEW_CONTENT_POST': {
            return {
                newContentPost: {
                    ...state.newContentPost,
                    instagram: {
                        ig_PostFrequency: action.payload.ig_PostFrequency,
                        ig_Followers: action.payload.ig_Followers,
                        ig_Likes: action.payload.ig_Likes,
                        ig_Comments: action.payload.ig_Comments
                    }
                }
            }
        }

        case 'TWITTER_UPDATE_NEW_CONTENT_POST': {
            return {
                newContentPost: {
                    ...state.newContentPost,
                    twitter: {
                        tw_PostFrequency: action.payload.tw_PostFrequency,
                        tw_Followers: action.payload.tw_Followers,
                        tw_PostLikes: action.payload.tw_PostLikes,
                        tw_Comments: action.payload.tw_Comments,
                    }
                }
            }
        }

        case 'SNAPCHAT_UPDATE_NEW_CONTENT_POST': {
            return {
                newContentPost: {
                    ...state.newContentPost,
                    snapchat: {
                        sc_PostFrequency: action.payload.sc_PostFrequency,
                        sc_Followers: action.payload.sc_Followers,
                        sc_StoryOpens: action.payload.sc_StoryOpens,
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