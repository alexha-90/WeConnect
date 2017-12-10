const db = require('../config/db');
const passport = require('passport');

//===============================================================================================//

// need to account for saved id

module.exports = app => {
    app.post('/api/saveNewContentPost', async (req, res) => {
        try {
            const newPost = req.body;
            console.log(newPost);

            // associate user ID with contentPosts
            let passportID = `${JSON.stringify(req.session.passport)}`;
            passportID = passportID.match(/\d+/)[0];

            const sql =
                'INSERT INTO content_posts (user_location, content_summary, content_description, ' +
                'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, ' +
                'yt_view_count, user_id, content_tags, content_categories, ig_post_frequency, ' +
                'ig_followers, ig_likes, ig_comments, tw_post_frequency, tw_followers, tw_post_likes, ' +
                'tw_comments, sc_post_frequency, sc_followers, sc_story_opens, submitted_timestamp)' +
                'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)';

            const params = [newPost.userLocation, newPost.contentSummary, newPost.contentDescription,
                newPost.contentIdealMatch, newPost.youtube.yt_UploadFrequency, newPost.youtube.yt_VideoLength,
                newPost.youtube.yt_SubCount, newPost.youtube.yt_ViewCount, passportID, newPost.contentTags,
                newPost.contentCategories, newPost.instagram.ig_PostFrequency, newPost.instagram.ig_Followers,
                newPost.instagram.ig_Likes, newPost.instagram.ig_Comments, newPost.twitter.tw_PostFrequency,
                newPost.twitter.tw_Followers, newPost.twitter.tw_PostLikes, newPost.twitter.tw_Comments,
                newPost.snapchat.sc_PostFrequency, newPost.snapchat.sc_Followers, newPost.snapchat.sc_StoryOpens, newPost.submitted_timestamp
            ];

            return  db.query(sql, params)
            .then(() => {
                res.sendStatus(200);
            })
        } catch (err) {
            console.log('An error occurred. Entry was not saved. Reason: ' + err);
            res.send('error');
        }
    })
};

