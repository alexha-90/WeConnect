import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/profile';

// Page imports
import Header from './components/header__footer_login/Header';
import Landing from './components/Landing';
import NewContentPost from './components/new_content_post/NewPost';
import NewContentPostMediums from './components/new_content_post/NewPostMediums';
import NewContentPostImageUpload from './components/new_content_post/NewPostImageUpload';
import NewContentPostFinalReview from './components/new_content_post/NewPostFinalReview';
import SingleContentPost from './components/single_content_post/SinglePost';
import EditContentPost from './components/single_content_post/edit_post/EditContentPost';
import ContentCreatorsList from './components/content_creators_list/CreatorList';
import NewUserRegistration from './components/header__footer_login/NewUserRegistration';
import Profile from './components/profile/Profile';
import Footer from './components/header__footer_login/Footer';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div style={{background: "#e6e6e6"}}>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/ContentCreatorsList' component={ContentCreatorsList} />
                    <Route exact path='/newContentPost' component={NewContentPost} />
                    <Route exact path='/newContentPost/mediums' component={NewContentPostMediums} />
                    <Route exact path='/newContentPost/images' component={NewContentPostImageUpload} />
                    <Route exact path='/newContentPost/review' component={NewContentPostFinalReview} />
                    <Route exact path='/newUserRegistration' component={NewUserRegistration} />
                    <Route path='/contentPost/view/' component={SingleContentPost} />
                    <Route path='/contentPost/edit/' component={EditContentPost} />
                    <Footer />
                    {/* temporary files below*/}

                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);