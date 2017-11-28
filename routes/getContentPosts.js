// connect to postgres db
const { Client } = require('pg');
require('dotenv').config();

//===============================================================================================//

module.exports = app => {
    app.route('/api/getAllContentPosts')
        .get(async (req, res) => {
            try {

                console.log('Attempt to retrieve all contentPosts from db');
                //res.send('back to front-end. Here is what you sent me: ' + newTaskToSave);

                const client = new Client();
                client.connect()
                    .then(() => {
                        console.log('Successfully connected to postgres DB. Getting all contentPosts now');
                        const sql = 'SELECT * FROM content_posts';
                        return client.query(sql);
                    })
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

                const client = new Client();
                client.connect()
                    .then(() => {
                        console.log('Successfully connected to postgres DB. Getting single contentPost now');
                        const sql = 'SELECT * FROM content_posts WHERE content_post_id=$1';
                        const params = [req.body.payload];
                        return client.query(sql, params);
                    })
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