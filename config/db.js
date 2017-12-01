// reference: https://node-postgres.com/features/connecting

const { Client } = require('pg');
const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

client.connect();

// connection test. Paste example into route
// const db = require('../config/db');
// db.query('SELECT NOW()', (err, res) => {
//     console.log(err, res);
//     db.end();
// });

module.exports = client;