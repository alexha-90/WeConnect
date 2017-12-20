const db = require('../config/db');
// const passport = require('passport');

//===============================================================================================//

// need to account for saved id

module.exports = app => {
    app.post('/api/newPrivateMessage', async (req, res) => {
        try {
            const userMessage = req.body.message;
            const timestamp = req.body.timestamp;
            const postID = req.body.postID;
            const posterID = req.body.posterID;
            const userID = req.body.userID;
            const postSummary = req.body.postSummary;

            console.log(userMessage);

            const sql =
                'INSERT INTO private_messages (poster_id, user_id, poster_message, user_message, timestamp, post_id, post_summary) ' +
                'VALUES ($1, $2, $3, $4, $5, $6, $7)';

            const params = [posterID, userID, null, userMessage, timestamp, postID, postSummary];

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

