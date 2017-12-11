const db = require('../config/db');

//===============================================================================================//

module.exports = app => {

    // needs to be refactored to retrieve less data. this is only used for list results
    app.get('/api/getAllContentPosts', async (req, res)  => {
        try {
            const sql = 'SELECT * FROM content_posts';
            return db.query(sql)
            .then((results) => {
                res.send(results['rows']);
            })
            .catch((err) => {
                console.log('An error occurred. All available contentPosts not retrieved. Reason: ' + err);
                res.send('error');
            });
        } catch (res) {
            console.log(res.err);
            res.send('error');
        }
    });

    // get all data, expanded
    app.post('/api/getSingleContentPost', async (req, res) => {
        try {
            let params = JSON.stringify(req.body);
            params = [parseInt(params.match(/\d+/)[0],10)];
            const sql = 'SELECT * FROM content_posts WHERE content_post_id=$1';
            return db.query(sql, params)
            .then((results) => {

                // compare contentPost's author id with passport session id. Show edit button if so
                results['rows'][0]['is_author'] = false;
                let passportID = `${JSON.stringify(req.session.passport)}`;
                passportID = passportID.match(/\d+/)[0];

                if (passportID === results['rows'][0]['user_id']) {
                    console.log('WWWWWWW');
                    results['rows'][0]['is_author'] = true;
                }
                res.send(results['rows']);
            })
            .catch((err) => {
                console.log('An error occurred. Single contentPost not retrieved. Reason: ' + err);
                res.send('error');
            });
        } catch (res) {
            console.log(res.err);
            res.send('error');
        }
    })
};