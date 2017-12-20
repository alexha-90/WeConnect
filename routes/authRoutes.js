const db = require('../config/db');
const bcrypt = require('bcrypt');
const passport = require('passport');

// ************* authentication routes: isLoggedIn, saveNewUser, getProfileData

// need to check if user already exists
// getProfileData needs to consider advertisers accounts too, once that's wired in
//===============================================================================================//

module.exports = (app) => {

    app.get('/api/isLoggedIn', authenticationCheck(), (req, res) => {
        return res.send(true);
    });


    app.post('/api/loginUser', (req, res) => {
        const inputEmail = req.body[0];
        const inputPassword = req.body[1];

        try {
            const sql = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
            const params = [inputEmail];
            return db.query(sql, params)
            .then((result) => {
                const maskedPassword = result['rows'][0]['password'];
                const userID = result['rows'][0]['user_id'];
                return [maskedPassword, userID]
            })
            .then(([maskedPassword, userID]) => {
                bcrypt.compare(inputPassword, maskedPassword)
                    .then((pwMatch) => {
                        if (pwMatch) {
                            return req.login(userID, () => {
                                return res.sendStatus(200);
                            });
                        }
                        console.log('*********no match keep trying****');
                        res.send('error');
                    })
                    .catch ((err) => {
                        console.log('####');
                        console.log(err);
                        return res.send('error');
                    })
            })
        } catch (res) {
        console.log(res.err);
        res.send('error')
        }
    });


    app.get('/api/logoutUser', (req, res) => {
        try {
            req.logout();
            req.session.destroy();
            console.log('user authenticated?:');
            console.log(req.isAuthenticated());
            return res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.send('error');
        }
    });

    app.get('/api/fetchUserID', authenticationCheck(), (req, res) => {
        try {
            let passportID = `${JSON.stringify(req.session.passport)}`;
            passportID = passportID.match(/\d+/)[0];
            res.send(passportID);
        } catch (err) {
            console.log(err);
            res.send('error');
        }
    });


    // authentication is already checked when this is called
    app.post('/api/saveNewUser', (req, res) => {
        try {
            console.log('Attempt to save user to db');
            const newUser = req.body.payload;

            // TO-DO: query db to see if user already exists

            bcrypt.hash(newUser.password, 10)
                .then(function (hashPassword) {
                    const sql = 'INSERT INTO users (email, password, timestamp, account_type) VALUES ($1, $2, $3, $4)';
                    const params = [newUser.emailAddress, hashPassword, newUser.timestamp, newUser.accountType];
                    return db.query(sql, params)
                .then(() => {
                    const sql = "SELECT currval(pg_get_serial_sequence('users', 'user_id'))";
                    return db.query(sql)
                })
                .then((result) => {
                    const user_id = result['rows'];
                    console.log(user_id);
                    req.login(user_id, () => {
                        res.sendStatus(200);
                    });
                    console.log(req.user);
                    console.log(req.isAuthenticated());
                })
            });
        } catch (res) {
            console.log(res.err);
            res.send('error')
        }
    });

    // authentication is already checked when this is called
    // getProfileData needs to consider advertisers accounts too, once that's wired in
    app.get('/api/loadProfileData', (req, res) => {
        try {
            // associate user ID with contentPosts
            let passportID = `${JSON.stringify(req.session.passport)}`;
            passportID = passportID.match(/\d+/)[0];

            const sql1 = 'SELECT * FROM content_posts WHERE user_id=$1';
            const sql2 = 'SELECT * FROM private_messages WHERE user_id=$1';
            const params = [passportID];
            let data = [];
            return db.query(sql1, params)
            .then((posts) => {
                data.push(posts['rows']);
                return db.query(sql2, params);
            })
            .then((messages) => {
                data.push(messages['rows']);
                console.log(data);
                res.send(data);
            })



            // const sql1 = 'SELECT * FROM content_posts WHERE user_id=$1';
            // const sql2 = 'SELECT * FROM private_messages WHERE user_id=$1';
            // const params = [passportID];
            // return db.query(sql1, params)
            //     .then((results) => {
            //         console.log(results['rows']);
            //         res.send(results['rows']);
            //     })

        } catch (res) {
            console.log('An error occurred. User data was not retrieved. Reason: ' + res.err);
            console.log(res.err);
            res.send('error')
        }
    });




    passport.serializeUser((user_id, done) => {
        done(null, user_id);
    });


    passport.deserializeUser((user_id, done) => {
        done(null, user_id);
    });
};


function authenticationCheck() {
    return (req, res, next) => {
        if (req.isAuthenticated()) {
            console.log('yes logged in');
            return next();
        }
        console.log('not logged in!');
        // return res.sendStatus(401) - doesn't work since returns undefined
        return res.send(false);
    }
}