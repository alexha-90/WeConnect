
// connect to postgres db
const { Client } = require('pg');
require('dotenv').config();

// get rid of need to parseInt for value
// validate. if res.send.... else did not post properly
//===============================================================================================//

module.exports = app => {
    app.route('/api/saveNewTask')
        .post(async (req, res) => {
            try {

                console.log('Attempt to save task to db');
                const newTaskToSave = req.body.payload;
                console.log(newTaskToSave);
                //res.send('back to front-end. Here is what you sent me: ' + newTaskToSave);

                const client = new Client();
                client.connect()
                    .then(() => {
                        console.log('Successfully connected to postgres DB. Saving new task now');
                        const sql = 'INSERT INTO tasks (category, summary, value, description, hour, date) ' +
                            'VALUES ($1, $2, $3, $4, $5, $6)';
                        const params = [newTaskToSave.contentMedium, newTaskToSave.contentSummary, newTaskToSave.yt_SubCount,
                            newTaskToSave.contentDescription, newTaskToSave.yt_VideoLength, newTaskToSave.yt_UploadFrequency];
                        return client.query(sql, params);
                    })
                    .catch((err) => {
                        console.log('An error occurred. Entry was not saved. Reason: ' + err);
                        res.send('Error!');
                    });

            } catch (res) {
                console.log(res.err);
            }
        })
};