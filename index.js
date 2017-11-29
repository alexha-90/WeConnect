const express = require('express');
const app = express();
//consider pg-pool
//===============================================================================================//

//const pool = require('pg-pool');
//const pg = require('pg');

//allow cross-origin resource sharing for development
const cors = require('cors');
app.use(cors());


// logs all api requests to the console
const morgan = require('morgan');
app.use(morgan('dev'));


const cookieParser = require('cookie-parser');
app.use(cookieParser());


// middleware to parse all POST/PUT/PATCH body request as req.body on backend
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data


// session secret. See https://github.com/expressjs/session#options . May need some adjusting later
const session = require('express-session');
app.use(session({
    secret: 'testTest',
    resave: true,
    saveUninitialized: true
}));


const flash = require('connect-flash');
app.use(flash());


// user authentication middleware
const passport = require('passport');
//require('./services/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


// import routes
//===========================================================================
// route for when user submits a new task, POST to database
require('./routes/saveNewContentPost')(app, passport);
require('./routes/getContentPosts')(app); // no authentication needed to view
require('./routes/saveNewUser')(app);

// passport authorization routes (login, logout, register, etc)
//require('./routes/authRoutes')(app, passport);

// basic test routes
app.get('/', (req, res) => {
    res.send("hello @ indexes");
});

app.get('/test', (req, res) => {
    res.send("hello @ test");
});

//===========================================================================




// =================================================================================================
// SERVER CONFIGURATION                                                                           //
// =================================================================================================

// currently always defaults to port specified in dotenv
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log("NodeJS server started on port: " + PORT);
});