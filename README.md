# WeConnect

A platform that connects content creators
(specifically people with strong followings on YouTube, Twitter, Snapchat, and Instagram) with advertisers.
Content creators can anonymously list their metrics, target audience, goals, and other supplemental information.
Advertisers can view posts made by content creators and contact them for potential partnerships.

## tl;dr: Service for connecting advertisers with content creators (YT, IG, TWTR, SC)

### Live demo: 
<https://we-connect-social.herokuapp.com> (WORK IN PROGRESS!)

## Built with
* React.js
* Redux
* Bootstrap
* CSS (SCSS)
* HTML
* Node.js (Express)
* PostgreSQL

## Notable tools
* Cloudinary.com image storage/processing API
* Passport.js + bcrypt.js
* Heroku + Heroku Data
* Axios + redux-thunk


[x] = addressed, [ ] = work in progress
## Known functional bugs and issues
- [ ] Cannot delete image after uploading on newPost
- [ ] Cannot modify images on edit post
- [ ] Cannot edit category on edit post
- [ ] Private messages should be in conversation format
- [ ] Sticky footer not working. Floats up when not enough content on page
- [x] List results not ordered
- [x] lightbox references image links from previously viewed singlePosts 
- [x] Prompt better error if user attempts to access nonexistent post via URL
- [x] Can register new account with existing username and/or email

## Known visual bugs and issues
- [ ] Not optimized for mobile
- [ ] Username slides out of place on browser zoom change
- [ ] Categories menu on new/edit post slides when expanding/collapsing
- [ ] Uploaded image placement positions and sizes can be optimized
- [ ] Private messages in portfolio page has no styling
- [ ] Hard to see twitter icon when hovering over results list page
- [ ] On newPost page, use icons instead of checkboxes for social mediums
- [ ] Change styling instead of alert after login fail

## Potential future features
* Pull information from respective social medium's API
* Location field in newPost integrates Google Places autocomplete
* Profile description and change avatar
* Filter post results
