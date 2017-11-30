
// connect to postgres db
// const { Client } = require('pg');

// get rid of need to parseInt for value
// validate. if res.send.... else did not post properly
//===============================================================================================//

// module.exports = app => {
//     app.route('/api/saveNewUser')
//         .post(async (req, res) => {
//             try {
//                 console.log('Attempt to save user to db');
//                 const saveNewUser = req.body.payload;
//                 console.log(saveNewUser);
//                 //res.send('back to front-end. Here is what you sent me: ' + saveNewUser);
//
//                 // const client = new Client();
//                 // client.connect()
//                 //     .then(() => {
//                 //         console.log('Successfully connected to postgres DB. Saving new user now');
//                 //         const sql = 'INSERT INTO users (content_medium, content_summary, content_description, ' +
//                 //             'content_ideal_match, yt_upload_frequency, yt_video_length, yt_sub_count, yt_view_count) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
//                 //         const params = [saveNewContentPost.contentMedium, saveNewContentPost.contentSummary, saveNewContentPost.contentDescription,
//                 //             saveNewContentPost.contentIdealMatch, saveNewContentPost.yt_UploadFrequency, saveNewContentPost.yt_VideoLength, saveNewContentPost.yt_SubCount, saveNewContentPost.yt_ViewCount];
//                 //         return client.query(sql, params);
//                 //     })
//                 //     .catch((err) => {
//                 //         console.log('An error occurred. Entry was not saved. Reason: ' + err);
//                 //         res.send('Error!');
//                 //     });
//
//             } catch (res) {
//                 console.log(res.err);
//             }
//         })
// };
