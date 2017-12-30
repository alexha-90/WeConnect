const db = require('../config/db');
const passport = require('passport');

//===============================================================================================//

module.exports = app => {
    app.post('/api/saveNewContentPost', async (req, res) => {
        try {
            const newPost = req.body;
            console.log(newPost);

            // associate user ID with contentPosts
            let passportID = `${JSON.stringify(req.session.passport)}`;
            passportID = passportID.match(/\d+/)[0];

            // query db for username then save all newContentPost details to db
            const sql1 = 'SELECT username FROM users WHERE user_id=$1 LIMIT 1';
            const params1 = [passportID];
            return db.query(sql1, params1)
                .then((result) => {
                    let username = result['rows'][0]['username'];
                    const sql2 =
                        'INSERT INTO content_posts (poster_location, content_summary, content_description, ' +
                        'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, ' +
                        'yt_view_count, poster_id, content_tags, content_categories, ig_post_frequency, ' +
                        'ig_followers, ig_likes, ig_comments, tw_post_frequency, tw_followers, tw_post_likes, ' +
                        'tw_comments, sc_post_frequency, sc_followers, sc_story_opens, submitted_timestamp, username)' +
                        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)';

                    const params2 = [newPost.userLocation, newPost.contentSummary, newPost.contentDescription,
                        newPost.contentIdealMatch, newPost.youtube.yt_UploadFrequency, newPost.youtube.yt_VideoLength,
                        newPost.youtube.yt_SubCount, newPost.youtube.yt_ViewCount, passportID, newPost.contentTags,
                        newPost.contentCategories, newPost.instagram.ig_PostFrequency, newPost.instagram.ig_Followers,
                        newPost.instagram.ig_Likes, newPost.instagram.ig_Comments, newPost.twitter.tw_PostFrequency,
                        newPost.twitter.tw_Followers, newPost.twitter.tw_PostLikes, newPost.twitter.tw_Comments,
                        newPost.snapchat.sc_PostFrequency, newPost.snapchat.sc_Followers, newPost.snapchat.sc_StoryOpens,
                        newPost.submitted_timestamp, username
                    ];

                    return db.query(sql2, params2)
                })
                .then(() => {
                    res.sendStatus(200);
                })
        } catch (err) {
            console.log('An error occurred. Entry was not saved. Reason: ' + err);
            res.send('error');
        }
    });

    app.patch('/api/saveEditedPost', async (req, res) => {
        try {
            let editDetails = req.body;
            //
            // if (!editDetails.youtube.yt_UploadFrequency) {
            //     delete editDetails.youtube;
            // }
            //
            // if (!editDetails.instagram.ig_PostFrequency) {
            //     delete editDetails.instagram;
            // }
            //
            // if (!editDetails.twitter.tw_PostFrequency) {
            //     delete editDetails.twitter;
            // }
            //
            // if (!editDetails.snapchat.sc_PostFrequency) {
            //     delete editDetails.snapchat;
            // }

            console.log(editDetails);

            // 3:31 am note: need to update all the changes at once, even if redundant

            // const sql =
            //     'INSERT INTO content_posts (poster_location, content_summary, content_description, ' +
            //     'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, ' +
            //     'yt_view_count, poster_id, content_tags, content_categories, ig_post_frequency, ' +
            //     'ig_followers, ig_likes, ig_comments, tw_post_frequency, tw_followers, tw_post_likes, ' +
            //     'tw_comments, sc_post_frequency, sc_followers, sc_story_opens, submitted_timestamp, username)' +
            //     'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24) ' +
            //     'WHERE content_post_id=$25';
            //
            // const params = [editDetails.userLocation, editDetails.contentSummary, editDetails.contentDescription,
            //     editDetails.contentIdealMatch, newPost.youtube.yt_UploadFrequency, newPost.youtube.yt_VideoLength,
            //     newPost.youtube.yt_SubCount, newPost.youtube.yt_ViewCount, passportID, newPost.contentTags,
            //     newPost.contentCategories, newPost.instagram.ig_PostFrequency, newPost.instagram.ig_Followers,
            //     newPost.instagram.ig_Likes, newPost.instagram.ig_Comments, newPost.twitter.tw_PostFrequency,
            //     newPost.twitter.tw_Followers, newPost.twitter.tw_PostLikes, newPost.twitter.tw_Comments,
            //     newPost.snapchat.sc_PostFrequency, newPost.snapchat.sc_Followers, newPost.snapchat.sc_StoryOpens,
            //     newPost.submitted_timestamp, username, editDetails.contentPostID
            // ];
            //
            // return  db.query(sql, params)
            //     .then(() => {
            //         res.sendStatus(200);
            //     })

        } catch (err) {
            console.log('An error occurred. Entry was not saved. Reason: ' + err);
            res.send('error');
        }
    });
};

