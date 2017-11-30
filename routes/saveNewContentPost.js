const db = require('../config/db');

//===============================================================================================//

module.exports = app => {
    app.route('/api/saveNewContentPost')
        .post(async (req, res) => {
            try {
                console.log('Attempt to save contentPost to db');
                const saveNewContentPost = req.body.payload;
                console.log(saveNewContentPost);

                const sql = 'INSERT INTO content_posts (content_medium, content_summary, content_description, ' +
                    'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, yt_view_count) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
                const params = [saveNewContentPost.contentMedium, saveNewContentPost.contentSummary, saveNewContentPost.contentDescription,
                    saveNewContentPost.contentIdealMatch, saveNewContentPost.yt_UploadFrequency, saveNewContentPost.yt_VideoLength, saveNewContentPost.yt_SubCount, saveNewContentPost.yt_ViewCount];
                return db.query(sql, params)
                .catch((err) => {
                    console.log('An error occurred. Entry was not saved. Reason: ' + err);
                    res.send('Error!');
                });
            } catch (res) {
                console.log(res.err);
            }
        })
};