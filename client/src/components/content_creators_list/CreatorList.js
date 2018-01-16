import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchAllContentPosts } from '../../actions/contentPosts';
import { loadingSpinner } from '../helper_functions';
import ContentPostFilterBar from './CreatorListFilterSidebar';
import contentCreatorResults from './creatorListResult';
// import ContentPostListAdSpace from './CreatorListAdSpace';

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
            return loadingSpinner();
        }

        return (
            <div className="creatorListContainer">
                <div className="newPostBanner">
                    <span>
                        Want to leverage your social media presence to earn extra money?&nbsp;&nbsp;
                        <Button bsStyle="success">
                            <Link to="newContentPost">
                                Create a new listing!
                            </Link>
                        </Button>
                    </span>
                </div>


                {/* Import */}
                <ContentPostFilterBar/>

                <div className="contentPostContainer">
                    <h1>Content creators looking to advertise:</h1>
                    {contentCreatorResults(this.state.contentPosts)}
                </div>

                {/*/!* Import *!/*/}
                {/*<ContentPostListAdSpace/>*/}
        </div>
        )
    }
}


export default connect(null)(ContentCreatorsList);