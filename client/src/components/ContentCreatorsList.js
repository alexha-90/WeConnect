import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchAllContentPosts } from '../actions/index';

import ContentPostFilterBar from './subcomponents/ContentPostFilterBar';
import contentCreatorsResults from './subcomponents/contentCreatorsResults';

// loading screen reference: https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
// create rating system

// make searchable filters
// simplify response so not everything needs to be queried from DB. Just enough for preview. Then user can load more upon expanding
//===============================================================================================//

class ContentCreatorsList extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            contentPosts: []
        };
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(fetchAllContentPosts())
                .then((data) => {
                    if (data === 'error') {
                        return alert ('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                    }
                    return this.setState({ contentPosts: data });
                })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            return this.setState({ loadingComponent: false });
        }, 500);
    }


    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        return (
            <div>
                <div className="newPostBanner">
                    <span>
                        Want to leverage your social media presence to earn extra money?
                        <Button bsStyle="success">
                            <Link to="newContentPost">
                                Create new listing
                            </Link>
                        </Button>
                    </span>
                </div>

                {/* Import */}
                <ContentPostFilterBar/>

                <div className="contentPostContainer">
                    <h1>Content creators looking to advertise:</h1>
                    {contentCreatorsResults(this.state.contentPosts)}
                </div>
        </div>
        )
    }
}


export default connect(null)(ContentCreatorsList);