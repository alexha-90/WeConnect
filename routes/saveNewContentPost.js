const db = require('../config/db');

//===============================================================================================//

// need to account for saved id

module.exports = app => {
    app.post('/api/saveNewContentPost', async (req, res) => {
        try {
            const saveNewContentPost = req.body;
            console.log(saveNewContentPost);

            const sql = 'INSERT INTO content_posts (content_medium, content_summary, content_description, ' +
                'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, yt_view_count) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
            const params = [saveNewContentPost.contentMedium, saveNewContentPost.contentSummary, saveNewContentPost.contentDescription,
                saveNewContentPost.contentIdealMatch, saveNewContentPost.yt_UploadFrequency, saveNewContentPost.yt_VideoLength, saveNewContentPost.yt_SubCount, saveNewContentPost.yt_ViewCount];
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