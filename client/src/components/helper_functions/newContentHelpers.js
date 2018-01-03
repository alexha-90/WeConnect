import React from 'react';
// import { youtubeRemoveData, instagramRemoveData, twitterRemoveData, snapchatRemoveData } from '../../actions/new_content_post'

//===============================================================================================//

//remove the !== null line for testing and building

export function uploadedImages(imagesArr) {
    if (imagesArr.length) {
        return (
            <div>
                {imagesArr.map((image) => {
                    //image[0] = url, image[1] = upload count
                    return (
                        <div key={image[1]} className="uploadedImages">
                            {/*<span onClick={() => imagesArr.splice(imagesArr[0],1)}>X</span>*/}
                            <img src={image[0]} alt={('img'-image[1]).toString()}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}


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



export function youtubeData (props) {
    // if (props.new_content_post.youtube.yt_UploadFrequency !== null) {
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
    // if (props.new_content_post.instagram.ig_PostFrequency !== null) {
    if (props.newContentPost.instagram) {
        return (
            <div>
                <h3>Instagram:</h3>
                <ul className="finalReviewList">
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
    // if (props.new_content_post.twitter.tw_PostFrequency !== null) {
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
    // if (props.new_content_post.snapchat.sc_PostFrequency !== null) {
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
