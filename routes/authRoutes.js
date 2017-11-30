// connect to postgres db
const db = require('../config/db');

//const bcrypt = require('bcrypt-nodejs');
const bcrypt = require('bcrypt');

// need to check if user already exists
//===============================================================================================//

module.exports = (app, passport) => {
    app.post('/api/saveNewUser',(req, res, next) => {
        try {
            console.log('Attempt to save user to db');
            const newUser = req.body.payload;

            bcrypt.hash(newUser.password, 10).then(function (hashPassword) {
                const sql = 'INSERT INTO users (email, password, timestamp, account_type) VALUES ($1, $2, $3, $4)';
                const params = [newUser.emailAddress, hashPassword, newUser.timestamp, newUser.accountType];
                return db.query(sql, params)
                    .catch((err) => {
                        console.log('An error occurred. Your account was not registered. Reason: ' + err);
                        res.send('Error!');
                    });
            });


            // const sql = 'INSERT INTO users (email, password, timestamp, account_type) VALUES ($1, $2, $3, $4)';
            // const params = [newUser.emailAddress, newUser.password, newUser.timestamp, newUser.accountType];
            // return db.query(sql, params)
            //     .catch((err) => {
            //         console.log('An error occurred. Your account was not registered. Reason: ' + err);
            //         res.send('Error!');
            //     });
        } catch (res) {
            console.log(res.err);
        }
    });
        // .post(async (req, res) => {
        //     try {
        //         console.log('Attempt to save user to db');
        //         const plainPassword = req.body.payload.password;
        //         let maskedPassword = '';
        //
        //
        //         // all code below successfully hashes password and returns true
        //         bcrypt.hash(plainPassword, 10).then(function (hash) {
        //             maskedPassword = hash;
        //             console.log(maskedPassword);
        //         });
        //
        //         setTimeout(() => {
        //             bcrypt.compare(plainPassword, maskedPassword).then(function (res) {
        //                 console.log(res);
        //             });
        //         }, 1000);
        //     } catch (res) {
        //         console.log(res);
        //     }
        // })






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
        //
        //
        //
        //
        //
        //         //res.send('back to front-end. Here is what you sent me: ' + saveNewUser);
        //
        //         // const client = new Client();
        //         // client.connect()
        //         //     .then(() => {
        //         //         console.log('Successfully connected to postgres DB. Saving new user now');
        //         //         const sql = 'INSERT INTO users (content_medium, content_summary, content_description, ' +
        //         //             'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, yt_view_count) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
        //         //         const params = [saveNewContentPost.contentMedium, saveNewContentPost.contentSummary, saveNewContentPost.contentDescription,
        //         //             saveNewContentPost.contentIdealMatch, saveNewContentPost.yt_UploadFrequency, saveNewContentPost.yt_VideoLength, saveNewContentPost.yt_SubCount, saveNewContentPost.yt_ViewCount];
        //         //         return client.query(sql, params);
        //         //     })
        //         //     .catch((err) => {
        //         //         console.log('An error occurred. Entry was not saved. Reason: ' + err);
        //         //         res.send('Error!');
        //         //     });
        //
        //     } catch (res) {
        //         console.log(res.err);
        //     }
        // })
};



/*
    app.post('/api/saveNewUser', passport.authenticate('local'), (req, res) => {
        res.redirect('/');
    })
 */