
// connect to postgres db
const { Client } = require('pg');
require('dotenv').config();

// get rid of need to parseInt for value

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
                        const sql = 'INSERT INTO tasks (category, summary, value, description, hour, date) ' +
                            'VALUES ($1, $2, $3, $4, $5, $6)';
                        const params = [newTaskToSave.taskCategory, newTaskToSave.taskSummary, newTaskToSave.taskValue,
                            newTaskToSave.taskDescription, newTaskToSave.taskNeededHour, newTaskToSave.taskNeededDate];
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