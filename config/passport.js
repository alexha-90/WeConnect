//not used as of 11/30 nighttime
//
// const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy;
//
// //===============================================================================================//
//
//
// module.exports = (passport) => {
//
//     // serialize session
//     passport.serializeUser((user, done) => {
//         done(null, user.id);
//     });
//
//     passport.deserializeUser((id, done) => {
//         done(null, id);
//     });
//
//
//     passport.use(new LocalStrategy({
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         function(username, password, done) {
//             // query db here to find if user already exists
//             User.findOne({username: username}, function (err, user) {
//                 if (err) {
//                     return done(err);
//                 }
//                 if (user) {
//                     return done(null, false, {message: 'Error: username already taken.'});
//                 } else {
//                     console.log('confirmed no user with associated email');
//                     // generate hash for pw
//                     // save to database
//                     // send back response to client
//                 }
//             });
//
//         }));
//
// };
//
//
//
// /*
//     // serialize session
//     passport.serializeUser((user, done) => {
//         done(null, user.id);
//     });
//
//     passport.deserializeUser((id, done) => {
//         User.findById(id)
//             .then(user => {
//                 done(null, user);
//             })
//     });
//
//     passport.use('local-signup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     function (req, email, password, done) {
//
//         process.nextTick(function() {
//
//
//
//         })
//     }
// */