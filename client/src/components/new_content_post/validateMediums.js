import { youtubeRemoveData, instagramRemoveData, twitterRemoveData, snapchatRemoveData } from '../../actions/newContentPost'
//===============================================================================================//


export function validateMediums (state, props) {
    // check that inputs are valid
    if (!state.showYouTubeForm && !state.showInstagramForm && !state.showTwitterForm && !state.showSnapchatForm) {
        alert('Error: You must select and enter information for at least one medium before proceeding!');
        return false;
    }

    if (state.showYouTubeForm && !props.newContentPost.youtube.yt_UploadFrequency) {
        alert('Error: Please make sure to fill out all details for the YouTube form or deselect the option.');
        return false;
    }

    if (state.showInstagramForm && !props.newContentPost.instagram.ig_PostFrequency) {
        alert('Error: Please make sure to fill out all details for the Instagram form or deselect the option.');
        return false;
    }

    if (state.showTwitterForm && !props.newContentPost.twitter.tw_PostFrequency) {
        alert('Error: Please make sure to fill out all details for the Twitter form or deselect the option.');
        return false;
    }

    if (state.showSnapchatForm && !props.newContentPost.snapchat.sc_PostFrequency) {
        alert('Error: Please make sure to fill out all details for the Snapchat form or deselect the option.');
        return false;
    }

    // clear out values if checkbox is not selected at point of submitting
    if (!state.showYouTubeForm) {
        props.dispatch(youtubeRemoveData());
    }

    if (!state.showInstagramForm) {
        props.dispatch(instagramRemoveData());
    }

    if (!state.showTwitterForm) {
        props.dispatch(twitterRemoveData());
    }

    if (!state.showSnapchatForm) {
        props.dispatch(snapchatRemoveData());
    }

    return true;
}