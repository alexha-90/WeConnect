const express = require('express');
const app = express();
//consider pg-pool
//===============================================================================================//


//allow cross-origin resource sharing for development
const cors = require('cors');
app.use(cors());

// middleware to parse all POST/PUT/PATCH body request as req.body on backend
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data

// import routes
// route for when user submits a new task, POST to database
require('./routes/saveNewContentPost')(app);
require('./routes/getContentPosts')(app);

// basic test routes
app.get('/', (req, res) => {
    res.send("hello @ indexes");
});

app.get('/test', (req, res) => {
    res.send("hello @ test");
});

// =================================================================================================
// SERVER CONFIGURATION                                                                           //
// =================================================================================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("NodeJS server started")
});