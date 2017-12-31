const db = require('../config/db');
//===============================================================================================//

module.exports = app => {
    app.post('/api/deleteContentPost', async (req, res) => {
        try {
            const postID = JSON.stringify(req.body);
            const params = [parseInt(postID.match(/\d+/)[0],10)];
            console.log(params);

            const sql = 'DELETE from content_posts WHERE content_post_id=$1';
            return db.query(sql, params)
                .then(() => {
                    res.sendStatus(200);
                })
        } catch (err) {
            console.log('An error occurred. Entry was not deleted. Reason: ' + err);
            res.send('error');
        }
    });
};