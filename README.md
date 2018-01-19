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
- [x] Category checkbox state not preserved in editPost UI
- [x] Cannot add category on edit post
- [x] List results not ordered
- [x] lightbox references image links from previously viewed singlePosts 
- [x] Prompt better error if user attempts to access nonexistent post via URL
- [x] Can register new account with existing username and/or email
- [ ] Cannot delete image after uploading on newPost
- [ ] Cannot modify images on edit post
- [ ] Window load can drop users off at strange spots
- [ ] Cannot remove category on edit post
- [ ] Category checkbox state not preserved in newPost UI

## Known visual bugs and issues
- [x] Username slides out of place in header
- [x] Hard to see twitter icon when hovering over results list page
- [x] WORKING ON AS OF 1/18/18: Optimize for tablet
- [ ] Optimize for mobile
- [ ] Categories menu on new/edit post slides when expanding/collapsing
- [ ] Uploaded image placement positions and sizes can be optimized
- [ ] Private messages in portfolio page has no styling
- [ ] Sticky footer not working. Floats up when not enough content on page

## Potential future features
* Pull information from respective social medium's API
* Location field in newPost integrates Google Places autocomplete
* Profile description and change avatar
* Filter post results
* Post result pagination 
* Allocate space for ad banners
* Private messages should be in conversation format

## Potential visual improvements
* On newPost page, use icons instead of checkboxes for social mediums
