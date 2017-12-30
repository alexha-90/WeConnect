import { youtubeRemoveData, instagramRemoveData, twitterRemoveData, snapchatRemoveData } from '../../../actions/newContentPost'
import { updateSingleContentPost } from '../../../actions/index'

import moment from 'moment';
//===============================================================================================//

export function submissionFlow(state, props) {
    // if form is open and has neither contentPost or newPost data, prompt error.
    if (state.showYouTubeForm && (!props.contentPost['yt_upload_frequency'] && !props.newContentPost.youtube.yt_UploadFrequency)) {
        alert('Error: Please make sure to fill out all details for the YouTube form or deselect the option.');
        return false;
    }

    if (state.showInstagramForm && (!props.contentPost['ig_post_frequency'] && !props.newContentPost.instagram.ig_PostFrequency)) {
        alert('Error: Please make sure to fill out all details for the Instagram form or deselect the option.');
        return false;
    }

    if (state.showTwitterForm && (!props.contentPost['tw_post_frequency'] && !props.newContentPost.twitter.tw_PostFrequency)) {
        alert('Error: Please make sure to fill out all details for the Twitter form or deselect the option.');
        return false;
    }

    if (state.showSnapchatForm && (!props.contentPost['sc_post_frequency'] && !props.newContentPost.snapchat.sc_PostFrequency)) {
        alert('Error: Please make sure to fill out all details for the Snapchat form or deselect the option.');
        return false;
    }

    // clear out values if checkbox is not selected at point of submission
    // NOTE: if user selected a new value for existing medium, the changes will be reflected on new_content_post
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


    setTimeout(() => {
        // NOTE: upon adding a new medium and entering required info, values are updated automatically in respective social components and placed into this.props.new_content_post

        if (!state.showYouTubeForm && !state.showInstagramForm && !state.showTwitterForm && !state.showSnapchatForm) {
            alert('Error: You must select and enter information for at least one medium before proceeding!');
            return false;
        }

        // on submission attempt, assign null values for mediums that did not get updated
        let youtube = {
            yt_UploadFrequency: props.newContentPost.youtube.yt_UploadFrequency,
            yt_VideoLength: props.newContentPost.youtube.yt_VideoLength,
            yt_SubCount: props.newContentPost.youtube.yt_SubCount,
            yt_ViewCount: props.newContentPost.youtube.yt_ViewCount
        };

        let instagram = {
            ig_PostFrequency: props.newContentPost.instagram.ig_PostFrequency,
            ig_Followers: props.newContentPost.instagram.ig_Followers,
            ig_Likes: props.newContentPost.instagram.ig_Likes,
            ig_Comments: props.newContentPost.instagram.ig_Comments
        };

        let twitter = {
            tw_PostFrequency: props.newContentPost.twitter.tw_PostFrequency,
            tw_Followers: props.newContentPost.twitter.tw_Followers,
            tw_PostLikes: props.newContentPost.twitter.tw_PostLikes,
            tw_Comments: props.newContentPost.twitter.tw_Comments,
        };

        let snapchat = {
            sc_PostFrequency: props.newContentPost.snapchat.sc_PostFrequency,
            sc_Followers: props.newContentPost.snapchat.sc_Followers,
            sc_StoryOpens: props.newContentPost.snapchat.sc_StoryOpens
        };

        // medium was not updated (has existing values), fetch values from this.props.contentPost instead
        if (props.contentPost['yt_upload_frequency'] && !props.newContentPost.youtube.yt_UploadFrequency) {
            youtube = {
                yt_UploadFrequency: props.contentPost['yt_upload_frequency'],
                yt_VideoLength: props.contentPost['yt_video_length'],
                yt_SubCount: props.contentPost['yt_sub_count'],
                yt_ViewCount: props.contentPost['yt_view_count']
            };

            // user wants to remove this medium, populate default null values
            if (!state.showYouTubeForm) {
                youtube = {...props.newContentPost.youtube};
            }
        }

        if (props.contentPost['ig_post_frequency'] && !props.newContentPost.instagram.ig_PostFrequency) {
            instagram = {
                ig_PostFrequency: props.contentPost['ig_post_frequency'],
                ig_Followers: props.contentPost['ig_followers'],
                ig_Likes: props.contentPost['ig_likes'],
                ig_Comments: props.contentPost['ig_comments']
            };

            if (!state.showInstagramForm) {
                instagram = {...props.newContentPost.instagram};
            }
        }

        if (props.contentPost['tw_post_frequency'] && !props.newContentPost.twitter.tw_PostFrequency) {
            twitter = {
                tw_PostFrequency: props.contentPost['tw_post_frequency'],
                tw_Followers: props.contentPost['tw_followers'],
                tw_PostLikes: props.contentPost['tw_post_likes'],
                tw_Comments: props.contentPost['tw_comments'],
            };

            if (!state.showTwitterForm) {
                twitter = {...props.newContentPost.twitter};
            }
        }

        if (props.contentPost['sc_post_frequency'] && !props.newContentPost.snapchat.sc_PostFrequency) {
            snapchat = {
                sc_PostFrequency: props.contentPost['sc_post_frequency'],
                sc_Followers: props.contentPost['sc_followers'],
                sc_StoryOpens: props.contentPost['sc_story_opens']
            };

            if (!state.showSnapchatForm) {
                snapchat = {...props.newContentPost.snapchat};
            }
        }

        // treat updates as a new post
        let editedPost = {
            lastEdited: moment().format("MM/DD/YYYY") + ' at ' + moment().utcOffset(-480).format('hh:mm a') + ' PST',
            contentPostID: state.contentPostID,
            userLocation: state.userLocation,
            contentSummary: state.contentSummary,
            contentDescription: state.contentDescription,
            contentIdealMatch: state.contentIdealMatch,
            contentTags: state.contentTags,
            contentCategories: state.contentCategories,
            youtube,
            instagram,
            twitter,
            snapchat
        };
        console.log(editedPost);
        props.dispatch(updateSingleContentPost(editedPost));
        alert('Your post has been successfully updated.');
    }, 200);
    return true;
}