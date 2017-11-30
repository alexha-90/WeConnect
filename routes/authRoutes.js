// connect to postgres db
const db = require('../config/db');

//const bcrypt = require('bcrypt-nodejs');
const bcrypt = require('bcrypt');

const passport = require('passport');

// need to check if user already exists
//===============================================================================================//

module.exports = (app) => {
    app.post('/api/saveNewUser',(req, res, next) => {
        try {
            console.log('Attempt to save user to db');
            const newUser = req.body.payload;

            bcrypt.hash(newUser.password, 10)
                .then(function (hashPassword) {
                    const sql = 'INSERT INTO users (email, password, timestamp, account_type) VALUES ($1, $2, $3, $4)';
                    const params = [newUser.emailAddress, hashPassword, newUser.timestamp, newUser.accountType];
                    return db.query(sql, params)
                .then(() => {
                    const sql = "SELECT currval(pg_get_serial_sequence('users', 'user_id'))";
                    return db.query(sql)
                })
                .then((results) => {
                    const user_id = results['rows'].value();
                    console.log(user_id);
                    req.login(user_id, () => {
                        res.send('successfully logged in!');
                    });
                    console.log(req.user);
                    console.log(req.isAuthenticated());
                })
                .catch((err) => {
                    console.log('An error occurred. Reason: ' + err);
                    res.send('Error!');
                });
            });
        } catch (res) {
            console.log(res.err);
        }
    });

};


passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    done(null, id);
});


// console.log(req.user)
// console.log(req.isAuthenticated());



    // app.route('/api/saveNewUser', passport.authenticate('local'), (req, res) => {
    //     res.redirect('/');
    // })
    //     .post(async (req, res) => {
    //         try {
    //             console.log('Attempt to save user to db');
    //             const plainPassword = req.body.payload.password;
    //             let maskedPassword = '';
    //
    //
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
