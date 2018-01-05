# WeConnect

I am building a website that connects content creators
(specifically people with strong followings on YouTube, Twitter, Snapchat, and Instagram) with advertisers.
Content creators can anonymously list their metrics, target audience, goals, and other supplemental information.
Advertisers can view posts made by content creators and contact them for potential partnerships.

## tl;dr: Service for connecting advertisers with content creators (YT, TWTR, SC, IG)

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
* Passport.js
* Heroku
* axios

###As of 1/5/2018:
## Known functional bugs and issues
* Cannot delete image after uploading on newPost
* Cannot modify images on edit post
* Cannot edit category on edit post
* Private messages should be in conversation format
* Can register new account with existing username and/or email
* Can't change user avatar. Assigned.
* Prompt better error if user attempts to access nonexistent post via URL
* Sticky footer not working. Floats up when not enough content on page


## Known visual bugs and issues
* Not optimized for mobile
* Categories menu on new/edit post slides when expanding/collapsing
* Uploaded image placement positions and sizes can be optimized
* Private messages in portfolio page has no styling
* Hard to see twitter icon when hovering over results list page
* On newPost page, use icons instead of checkboxes for social mediums

## Potential future features
* Pull information from respective social medium's API
* Location field in newPost integrates Google Places autocomplete
* Profile description and change avatar
* Filter post results