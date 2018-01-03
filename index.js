const express = require('express');
const app = express();
//===============================================================================================//

// environment file
// postgres env variables reference: https://www.postgresql.org/docs/9.3/static/libpq-envars.html
require('dotenv').config();

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
const pgSession = require('connect-pg-simple')(session);
app.use(session({
    store: new pgSession({
        conString: process.env.PGHOST
    }),
    secret: 'ooeortkoksdfisij',  //process.env.SECRET_KEY
    resave: false, // review
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    saveUninitialized: false
    // for HTTPS cookie: { secure: true }
}));


// user authentication middleware
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());


// import routes
//===========================================================================
require('./routes/createContentPost')(app);
require('./routes/readContentPosts')(app);
require('./routes/updateContentPost')(app);
require('./routes/deleteContentPost')(app);
require('./routes/authRoutes')(app);
require('./routes/privateMessages')(app);


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


// // development route. needs to changed for production
//app.use(express.static(path.resolve(__dirname, 'client/public')));
//app.get('*', (req,res) => res.sendFile(path.join(__dirname, 'client', 'public', 'index.html')));
//app.use(express.static('client/dist'));

// if (process.env.NODE_ENV === 'production') {
//     console.log('******** in production environment ********');
//
//     app.use(express.static(path.resolve(__dirname, 'client/build')));
//
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }
if (process.env.NODE_ENV === 'production') {
    console.log('******** in production environment ********');

    app.use(express.static(path.resolve(__dirname, 'client/build')));


    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}




// currently always defaults to port specified in dotenv
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log("NodeJS server started on port: " + PORT);
});