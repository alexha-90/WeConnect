import React from 'react';
// import { youtubeRemoveData, instagramRemoveData, twitterRemoveData, snapchatRemoveData } from '../../actions/newContentPost'

//===============================================================================================//

//remove the !== null line for testing and building


export function organizeCategories (categoriesArr) {
    // remove duplicates from categories array. Very efficient method borrowed from https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
    let obj = {};
    let uniqueCategoriesArr = [];
    for (let i = 0; i < categoriesArr.length; i++) {
        obj[categoriesArr[i]] = 0;
    }
    for (let i in obj) {
        uniqueCategoriesArr.push(i);
    }

    return 9;
    // // sort categories array. Very efficient method borrowed from https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra
    // uniqueCategoriesArr.sort((a,b) => {
    //     return (a < b) ? -1 : (a > b) ? 1 :0;
    // });
}


// did this for refactor. not working. For newPost would redirect no matter what. Can't return function due to promise err
export function validateMediums(state, props) {
    // if (!state.showYouTubeForm && !state.showInstagramForm && !state.showTwitterForm && !state.showSnapchatForm) {
    //     return alert('Error: You must select and enter information for at least one medium before proceeding!');
    // }
    //
    // if (state.showYouTubeForm && !props.newContentPost.youtube) {
    //     return alert('Error: Please make sure to fill out all details for the YouTube form or deselect the option.');
    // }
    //
    // if (state.showInstagramForm && !props.newContentPost.instagram) {
    //     return alert('Error: Please make sure to fill out all details for the Instagram form or deselect the option.');
    // }
    //
    // if (state.showTwitterForm && !props.newContentPost.twitter) {
    //     return alert('Error: Please make sure to fill out all details for the Twitter form or deselect the option.');
    // }
    //
    // if (state.showSnapchatForm && !props.newContentPost.snapchat) {
    //     return alert('Error: Please make sure to fill out all details for the Snapchat form or deselect the option.');
    // }
    //
    // // clear out values if checkbox is not selected at point of submitting
    // if (!state.showYouTubeForm) {
    //     props.dispatch(youtubeRemoveData());
    // }
    //
    // if (!state.showInstagramForm) {
    //     props.dispatch(instagramRemoveData());
    // }
    //
    // if (!state.showTwitterForm) {
    //     props.dispatch(twitterRemoveData());
    // }
    //
    // if (!state.showSnapchatForm) {
    //     props.dispatch(snapchatRemoveData());
    // }
    //
    // return 'test'; // valid submission

}


export function youtubeData (props) {
    // if (props.newContentPost.youtube.yt_UploadFrequency !== null) {
    if (props.newContentPost.youtube) {
        return (
            <div>
                <h3>Youtube:</h3>
                <ul>
                    <li>Upload frequency: {props.newContentPost.youtube.yt_UploadFrequency}</li>
                    <li>Typical video length: {props.newContentPost.youtube.yt_VideoLength}</li>
                    <li>Subscriber count: {props.newContentPost.youtube.yt_SubCount}</li>
                    <li>Total Channel views: {props.newContentPost.youtube.yt_ViewCount}</li>
                </ul>
            </div>
        )
    }
}

export function instagramData (props) {
    // if (props.newContentPost.instagram.ig_PostFrequency !== null) {
    if (props.newContentPost.instagram) {
        return (
            <div>
                <h3>Instagram:</h3>
                <ul>
                    <li>Post frequency: {props.newContentPost.instagram.ig_PostFrequency}</li>
                    <li>Followers: {props.newContentPost.instagram.ig_Followers}</li>
                    <li>Typical likes per post: {props.newContentPost.instagram.ig_Likes}</li>
                    <li>Typical comments per post: {props.newContentPost.instagram.ig_Comments}</li>
                </ul>
            </div>
        )
    }
}

export function twitterData (props) {
    // if (props.newContentPost.twitter.tw_PostFrequency !== null) {
    if (props.newContentPost.twitter) {
            return (
            <div>
                <h3>Twitter:</h3>
                <ul>
                    <li>Post frequency: {props.newContentPost.twitter.tw_PostFrequency}</li>
                    <li>Followers: {props.newContentPost.twitter.tw_Followers}</li>
                    <li>Typical likes per post: {props.newContentPost.twitter.tw_PostLikes}</li>
                    <li>Typical comments per post: {props.newContentPost.twitter.tw_Comments}</li>
                </ul>
            </div>
        )
    }
}

export function snapchatData (props) {
    // if (props.newContentPost.snapchat.sc_PostFrequency !== null) {
    if (props.newContentPost.snapchat) {
            return (
            <div>
                <h3>Snapchat:</h3>
                <ul>
                    <li>Post frequency: {props.newContentPost.snapchat.sc_PostFrequency}</li>
                    <li>Followers: {props.newContentPost.snapchat.sc_Followers}</li>
                    <li>Typical story opens: {props.newContentPost.snapchat.sc_StoryOpens}</li>
                </ul>
            </div>
        )
    }
}