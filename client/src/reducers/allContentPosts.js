const allContentPosts = (state = {
    contentPostDetails: {
        contentMedium: '',
        contentSummary: '',
        contentDescription: '',
        contentIdealMatch: '',
        yt_UploadFrequency: 0,
        yt_VideoLength: 0,
        yt_SubCount: '',
        yt_ViewCount: 0,
    }
    }, action) => {

    switch (action.type) {
        case 'ALL_CONTENT_POSTS_TO_REDUX_STATE': {
            console.log(action.payload, '****');
            return {
                ...state,
                contentPostDetails: action.payload
            };
        }

        case 'SINGLE_CONTENT_POST_TO_REDUX_STATE': {
            console.log(action.payload, '@@@@@');
            return {
                contentPostDetails: {
                    contentMedium: action.payload[0]['content_medium'],
                    contentSummary: action.payload[0]['content_summary'],
                    contentDescription: action.payload[0]['content_description'],
                    contentIdealMatch: action.payload[0]['content_ideal_match'],
                    yt_UploadFrequency: action.payload[0]['yt_upload_frequency'],
                    yt_VideoLength: action.payload[0]['yt_video_length'],
                    yt_SubCount: action.payload[0]['yt_sub_count'],
                    yt_ViewCount: action.payload[0]['yt_view_count'],
                }
            };
        }

        default: {
            return state;
        }
    }

};

export default allContentPosts