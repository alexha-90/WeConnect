const db = require('../config/db');

//===============================================================================================//

module.exports = app => {


    app.route('/api/getAllContentPosts')
        .get(async (req, res) => {
            try {
                console.log('Attempt to retrieve all contentPosts from db');
                const sql = 'SELECT * FROM content_posts';
                db.query(sql)

                .then((results) => {
                    res.send(results['rows']);
                })
                .catch((err) => {
                    console.log('An error occurred. All available contentPosts not retrieved. Reason: ' + err);
                    res.send('Error!');
                });

            } catch (res) {
                console.log(res.err);
            }
        });

    app.route('/api/getSingleContentPost')
        .post(async (req, res) => {
            try {
                console.log('Attempt to retrieve single contentPost from db');
                //res.send('back to front-end. Here is what you sent me: ' + newTaskToSave);
                const sql = 'SELECT * FROM content_posts WHERE content_post_id=$1';
                const params = [req.body.payload];
                return db.query(sql, params)

                .then((results) => {
                    res.send(results['rows']);
                })
                .catch((err) => {
                    console.log('An error occurred. Single contentPost not retrieved. Reason: ' + err);
                    res.send('Error!');
                });

            } catch (res) {
                console.log(res.err);
            }
        })
};