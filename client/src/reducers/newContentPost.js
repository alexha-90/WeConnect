const newContentPost = (state ={
    //change values below to null after testing done
    newContentPost: {
        contentSummary: '',
        contentSubCount: 0,
        contentMedium: '',
        contentUploadFrequency: '',
        contentVideoLength: '',
        contentDescription: '',
        contentIdealMatch: ''
    }}, action) => {

    switch (action.type) {
        case "SUBMIT_NEW_CONTENT_POST": {
            console.log(action.payload);
            return {
                newContentPost: {
                    contentIdealMatch: action.payload.contentIdealMatch,
                    contentSummary: action.payload.contentSummary,
                    contentSubCount: action.payload.contentSubCount,
                    contentMedium: action.payload.contentMedium,
                    contentUploadFrequency: action.payload.contentUploadFrequency,
                    contentVideoLength: action.payload.contentVideoLength,
                    contentDescription: action.payload.contentDescription
                }
            }
        }

        default: {
            return state;
        }
    }

};

export default newContentPost