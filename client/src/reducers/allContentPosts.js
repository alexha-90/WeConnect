const allContentPosts = (state = {
    allContentPosts: {
        contentMedium: '',
        contentSummary: '',
        contentDescription: '',
        contentIdealMatch: '',
        yt_UploadFrequency: 0,
        yt_VideoLength: 0,
        yt_SubCount: '',
        yt_ViewCount: 0,

        //temporary
        taskSummary: '',
        taskValue: 0,
        taskCategory: '',
        taskNeededDate: '',
        taskNeededHour: '',
        taskDescription: ''
    }
    }, action) => {

    switch (action.type) {
        case "ALL_CONTENT_POSTS_TO_REDUX_STATE": {

            console.log(action.payload, '****');
            /*
            implement pseudo-code later when claimed status implemented
            //if (claimed) {
                claimedTasks: {action.payload.claimed}
            }

            if (!claimed) {
                availableTasks {action.payload.notClaimed}
            }

            return claimedTasks, availableTasks
             */


            return {
                ...state,
                allContentPosts: action.payload
            };
        }

        default: {
            return state;
        }
    }

};

export default allContentPosts