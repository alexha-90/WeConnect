# WeConnect

A platform that connects content creators
(especially individuals with strong followings on YouTube, Twitter, Snapchat, and Instagram) with advertisers.
Content creators can anonymously list their metrics, target audience, goals, and other supplemental information.
Advertisers can view posts made by content creators and contact them for potential partnerships.

## tl;dr: Service for connecting advertisers with content creators (YT, IG, TWTR, SC)

## Live demo: 
<https://we-connect-social.herokuapp.com>

# Table of contents
* [Why this project](#why)
* [How to use](#howTo)
  * [Create a new post](#newPost)
  * [Edit a post](#editPost)
  * [Delete a post](#deletePost)
  * [Private message a content creator](#privateMessage)
* [Highlights](#highlights)
* [Built with](#builtWith)
* [Notable tools](#notableTools)
* [Difficulties and mistakes](#mistakes)
* [Known functional bugs](#knownFunctionalBugs)
* [Known visual bugs](#knownVisualBugs)
* [Potential features](#potentialFeatures)
* [Screenshots](#screenshots)
* [License](#license)


<a name="why"></a>
# Why this project:
I wanted to create a website for content creators to easily 
connect with advertisers. I emphasized anonymity and support for less 
popular content creators. From a technological standpoint, I wanted to 
practice SCSS, login systems, asynchronous actions, input 
validations, and working with multiple tables in a relational database. 

<a name="howTo"></a>
# How to use this website:
##### Note: You are able to browse posts without registering.

<a name="newPost"></a>
### Create a new post:
1. Make sure you have registered an account and are logged in
2. Click on the 'Browse content creators' button in the header menu
3. Click on the 'Create a new listing!' button on the top banner
4. Fill out the text fields with information about your content. Select your relevant categories. Click 'Proceed - Select your content mediums (Step 2/5)'
5. Select the social media mediums you post on and provide details. Each medium has unique drop-down values. Make sure to fill everything out. Deselect a medium to remove it. Click 'Proceed to optional images (Step 3/5)' 
6. *(Optional) Click on the dotted-line box to prompt the upload menu. You may select multiple image files. Other file types are not accepted.* Click 'Proceed to review (Step 4/5)'
7. Review your post. You can go back to any previous step and revise your inputs
8. Click the 'Submit! (Step 5/5)' button. Your post should go live momentarily

<a name="editPost"></a>
### Edit a post:
1. Click on your username in the header (a menu will drop down). Click 'View profile'
2. Find the post you would like to delete then click on it
3. On the right hand side of your screen, click the 'Edit post' button below your stated username
4. Post data should automatically populate. Make the desired changes
5. Click the 'Update!' button. You will be redirected to your newly updated post

<a name="deletePost"></a>
### Delete a post:
1. Access the 'Edit post' page using the instructions above
2. At the bottom of the 'Edit post' page, click the 'Delete post' button
3. Confirm your action by clicking 'Yep. Blast it.' after the 'Are you sure you want to delete your post?' prompt
4. Your post has been deleted from the database and you will be redirected to the listings page

<a name="privateMessage"></a>
### Message a content creator:
1. Make sure you have registered an account and are logged in
2. Navigate to the content post you would like to inquire about
3. On the right hand side of your screen, click the 'Send me a message!' button below the username
4. A text box will appear. Compose your message to the content creator here
5. Click the 'Send message!' button when you are done
6. Your message to this content creator will be visible in your profile page (chat thread feature work in progress)

<a name="highlights"></a>
# Highlights:
* Step-by-step progression when creating a new post. Data is preserved during navigation
* Extensive input validation to prevent data faults
* Integrated image processing system
* Private messaging system (work in progress)
* Data is logically stored in separated tables for easy SQL queries
* User registration/login system
* Responsive design is tablet friendly (mobile work in progress)


<a name="builtWith"></a>
# Built with
* React.js
* Redux
* Bootstrap
* CSS (SCSS)
* HTML
* Node.js (Express)
* PostgreSQL

<a name="notableTools"></a>
# Notable tools
* Cloudinary.com image storage/processing API
* Passport.js + bcrypt.js
* Heroku + Heroku Data
* Axios + redux-thunk
* pgAdmin

<a name="mistakes"></a>
# Difficulties and mistakes:
The project...
* demanded significantly more validation rules than I anticipated
* required me to study a lot more about authentication and how to integrate relational databases
* was more comprehensive and time consuming than I originally anticipated
* lacked clear goals and objectives at times. Me wanting to make something unique backfired a little
* was actually a different product at first. I restructured it from a homeowner/contractor service
* could have used better naming conventions
* should make use of more unit tests. But as the sole developer on a time crunch, I opted to skimp on this 

<a name="knownFunctionalBugs"></a>
# Known functional bugs and issues
- ~~Category checkbox state not preserved in editPost UI~~
- ~~Cannot add category on edit post~~
- ~~List results not ordered~~
- ~~Lightbox references image links from previously viewed singlePosts~~ 
- ~~Prompt better error if user attempts to access nonexistent post via URL~~
- ~~Can register new account with existing username and/or email~~
- Cannot delete image after uploading on newPost
- Cannot modify images on edit post
- Window load can drop users off at strange spots
- Cannot remove category on edit post
- Category checkbox state not preserved in newPost UI

<a name="knownVisualBugs"></a>
# Known visual bugs and issues
- ~~Username slides out of place in header~~
- ~~Hard to see twitter icon when hovering over results list page~~
- ~~Optimize for tablet~~
- Optimize for mobile
- Categories menu on new/edit post slides when expanding/collapsing
- Uploaded image placement positions and sizes can be optimized
- Private messages in portfolio page has no styling
- Sticky footer not working. Floats up when not enough content on page

<a name="potentialFeatures"></a>
# Potential features and improvements
* Ability to pull information from respective social medium's API
* Location field in newPost integrates Google Places autocomplete
* Profile description and change avatar
* Filter post results
* Post result pagination 
* Allocate space for ad banners
* Private messages should be in conversation format
* On newPost page, use icons instead of checkboxes for social mediums

<a name="screenshots"></a>
# Screenshots
<img align="middle" alt='homepage' width='430' src='https://alexha.io/images/WeConnect_landing.png' />

<img align="middle" alt='contentPost' width='430' src='https://alexha.io/images/WeConnect_post.png' />

<a name="license"></a>
# License
 * Copyright (C) 2018 Alex Ha
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file,
  You can obtain one at http://mozilla.org/MPL/2.0/.