import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

// Page imports
import Header from './components/Header'
import Landing from './components/Landing';
import NewContentPost from './components/NewContentPost';
import ReviewNewContentPost from './components/ReviewNewContentPost';
import ContentPostExpanded from './components/ContentPostExpanded';
import AdvertiserProfile from './components/AdvertiserProfile';
import ContentCreatorsList from './components/ContentCreatorsList';
import AdvertisersList from './components/AdvertisersList';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/ContentCreatorsList' component={ContentCreatorsList} />
                    <Route exact path='/advertisersList' component={AdvertisersList} />
                    <Route exact path='/newContentPost' component={NewContentPost} />
                    <Route exact path='/advertiserProfile' component={AdvertiserProfile} />
                    <Route path='/contentPost' component={ContentPostExpanded} />
                    <Route exact path='/reviewNewTask' component={ReviewNewContentPost} />

                    {/* temporary files below*/}

                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);