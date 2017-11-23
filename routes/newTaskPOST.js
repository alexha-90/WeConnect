
// connect to postgres db
const { Client } = require('pg');
require('dotenv').config();

//===============================================================================================//

module.exports = app => {
    app.route('/api/saveNewTask')
        .post(async (req, res) => {
            try {

                console.log('in express environment. Attempt to save task to db');
                const newTaskToSave = req.body.payload;
                console.log(newTaskToSave);
                res.send('back to front-end. Here is what you sent me: ' + newTaskToSave);


                const client = new Client();
                client.connect()
                    .then(() => {
                        console.log('Successfully connected to postgres DB. Saving new task now');
                        const sql = 'INSERT INTO tasks (category, summary) VALUES ($1, $2)';
                        const params = [newTaskToSave.taskCategory, newTaskToSave.taskSummary];
                        return client.query(sql, params);
                    })
                    .catch((err) => {
                        console.log('Entry was not saved. An error occurred. Reason: ' + err);
                    });

            } catch (res) {
                console.log(res.err);
            }
        })
};