import React from 'react';
//===============================================================================================//

//remove the !== null line for testing and building


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