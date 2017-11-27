const newContentPost = (state ={
    //change values below to null after testing done
    newContentPost: {
        contentMedium: '',
        contentSummary: '',
        contentDescription: '',
        contentIdealMatch: '',
        yt_UploadFrequency: 0,
        yt_VideoLength: 0,
        yt_SubCount: '',
        yt_ViewCount: 0
    }}, action) => {

    switch (action.type) {
        case "SUBMIT_NEW_CONTENT_POST": {
            console.log(action.payload);
            return {
                newContentPost: {
                    contentMedium: action.payload.contentMedium,
                    contentSummary: action.payload.contentSummary,
                    contentDescription: action.payload.contentDescription,
                    contentIdealMatch: action.payload.contentIdealMatch,
                    yt_UploadFrequency: action.payload.yt_UploadFrequency,
                    yt_VideoLength: action.payload.yt_VideoLength,
                    yt_SubCount: action.payload.yt_SubCount,
                    yt_ViewCount: action.payload.yt_ViewCount,
                }
            }
        }

        default: {
            return state;
        }
    }

};

export default newContentPost