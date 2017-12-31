const db = require('../config/db');
//===============================================================================================//

module.exports = app => {
    app.patch('/api/saveEditedPost', async (req, res) => {
        try {
            let editDetails = req.body;
            console.log(editDetails);

            const sql =
                'UPDATE content_posts SET ' +
                'last_edited = $1, poster_location = $2, content_summary = $3, content_description = $4, content_ideal_match = $5, content_tags = $6, content_categories = $7, ' +
                'yt_upload_frequency = $8, yt_video_length = $9, yt_sub_count = $10, yt_view_count = $11, ' +
                'ig_post_frequency = $12, ig_followers = $13, ig_likes = $14, ig_comments = $15, ' +
                'tw_post_frequency = $16, tw_followers = $17, tw_post_likes = $18, tw_comments = $19, ' +
                'sc_post_frequency = $20, sc_followers = $21, sc_story_opens = $22' +
                'WHERE content_post_id = $23';

            const params = [editDetails.lastEdited, editDetails.userLocation, editDetails.contentSummary, editDetails.contentDescription,
                editDetails.contentIdealMatch, editDetails.contentTags, editDetails.contentCategories, editDetails.youtube.yt_UploadFrequency,
                editDetails.youtube.yt_VideoLength, editDetails.youtube.yt_SubCount, editDetails.youtube.yt_ViewCount,
                editDetails.instagram.ig_PostFrequency, editDetails.instagram.ig_Followers, editDetails.instagram.ig_Likes, editDetails.instagram.ig_Comments,
                editDetails.twitter.tw_PostFrequency, editDetails.twitter.tw_Followers, editDetails.twitter.tw_PostLikes, editDetails.twitter.tw_Comments,
                editDetails.snapchat.sc_PostFrequency, editDetails.snapchat.sc_Followers, editDetails.snapchat.sc_StoryOpens,
                editDetails.contentPostID,
            ];

            return db.query(sql, params)
                .then(() => {
                    res.sendStatus(200);
                })
        } catch (err) {
            console.log('An error occurred. Entry was not updated. Reason: ' + err);
            res.send('error');
        }
    });
};