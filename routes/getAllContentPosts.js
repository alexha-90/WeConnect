// connect to postgres db
const { Client } = require('pg');
require('dotenv').config();

// get rid of need to parseInt for value

//===============================================================================================//

module.exports = app => {
    app.route('/api/retrieveAllContentPosts')
        .get(async (req, res) => {
            try {

                console.log('Attempt to retrieve all contentPosts from db');
                //res.send('back to front-end. Here is what you sent me: ' + newTaskToSave);


                const client = new Client();
                client.connect()
                    .then(() => {
                        console.log('Successfully connected to postgres DB. Getting all tasks now');
                        const sql = 'SELECT * FROM content_posts';
                        return client.query(sql);
                    })
                    .then((results) => {
                        //console.log(results['rows']);
                        res.send(results['rows']);
                    })
                    .catch((err) => {
                        console.log('An error occurred. All available tasks not retrieved. Reason: ' + err);
                        res.send('Error!');
                    });

            } catch (res) {
                console.log(res.err);
            }
        })
};