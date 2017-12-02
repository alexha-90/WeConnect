const userProfile = (state ={
    //change values below to null after testing done
    userProfileData: {
        emailAddress: '',
        password: '',
        accountType: '',
        timestamp: ''
    }}, action) => {

    switch (action.type) {
        // case 'LOAD_PROFILE_DATA': {
        //     console.log('*****$$');
        //     console.log(action.payload);
        //     return {
        //         newUserDetails: {
        //             contentMedium: action.payload.contentMedium,
        //             contentSummary: action.payload.contentSummary,
        //             contentDescription: action.payload.contentDescription,
        //             contentIdealMatch: action.payload.contentIdealMatch,
        //             yt_UploadFrequency: action.payload.yt_UploadFrequency,
        //             yt_VideoLength: action.payload.yt_VideoLength,
        //             yt_SubCount: action.payload.yt_SubCount,
        //             yt_ViewCount: action.payload.yt_ViewCount,
        //         }
        //     }
        // }

        default: {
            return state;
        }
    }

};

export default userProfile;