const db = require('../config/db');
const bcrypt = require('bcrypt');
const passport = require('passport');

// need to check if user already exists
//===============================================================================================//

module.exports = (app) => {

    app.get('/api/isLoggedIn', authenticationCheck(), (req, res) => {
        return res.sendStatus(200);
    });

    // authentication is already checked at this point
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
                        .catch((err) => {
                            console.log('An error occurred. Reason: ' + err);
                            res.send('error');
                        });
                });
        } catch (res) {
            console.log(res.err);
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
        return res.send('401');
    }
}




//             // all code below successfully hashes password and returns true
//             bcrypt.hash(plainPassword, 10).then(function (hash) {
//                 maskedPassword = hash;
//                 console.log(maskedPassword);
//             });
//
//             setTimeout(() => {
//                 bcrypt.compare(plainPassword, maskedPassword).then(function (res) {
//                     console.log(res);
//                 });
//             }, 1000);
//         } catch (res) {
//             console.log(res);
//         }
//     })