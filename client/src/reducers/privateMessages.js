const privateMessage = (state = {
    privateMessageDetails: {}
}, action) => {

    switch (action.type) {
        case 'PM_IDS_TO_PROPS': {
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

export default contentPosts;