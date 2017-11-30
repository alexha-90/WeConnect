import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleContentPost } from '../actions/';

// future expansion: referrals and reviews
// upload images. onclick expand

class ContentPostExpanded extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true
        };
        this.propagateContent = this.propagateContent.bind(this);
    }


    componentWillMount() {
        // need to make a rule for when random characters entered after /contentPost/....

        // get current url and extract id number. Query database for this primary key and return all relevant information
        let postID = this.props.location.pathname.match(/\d+/)[0];

        (async () => {
            try {
                return this.props.dispatch(fetchSingleContentPost(postID))
                .then(() => {
                    return this.setState({loadingComponent: false})
                })
            } catch (err) {
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            return this.propagateContent();
        }, 500);
    }

    propagateContent() {
        return (
            <div>
                <ul>
                    <li>Medium: {this.props.contentPosts.contentMedium}</li>
                    <li>Content summary: {this.props.contentPosts.contentSummary}</li>
                    <li>Content description: {this.props.contentPosts.contentDescription}</li>
                    <li>Content ideal match: {this.props.contentPosts.contentIdealMatch}</li>
                    <li>YouTube upload frequency: {this.props.contentPosts.yt_UploadFrequency}</li>
                    <li>YouTube typical video length: {this.props.contentPosts.yt_VideoLength}</li>
                    <li>YouTube subscriber count: {this.props.contentPosts.yt_SubCount}</li>
                    <li>YouTube channel view count: {this.props.contentPosts.yt_ViewCount}</li>
                </ul>
            </div>
        )
    }


    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        return (
            <div>
                <h1>Expanded view for individual contentPost:</h1>
                {this.propagateContent()}

                <Button bsStyle="success">
                    Interested in partnering with me? Send me a message
                </Button>
                ______
                <Button bsStyle="warning">
                    <Link to="/ContentCreatorsList">
                        Back to results
                    </Link>
                </Button>
                <br/>

                <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_640.jpg" alt="temp" />
                <img src="https://cdn.pixabay.com/photo/2016/01/22/02/06/food-1155130_640.jpg" alt="temp2" />


                <hr />
                <h1>Recent reviews: (to be continued)</h1>
                <ul>
                    <li>He promoted our content very well. Our sales went up!! 5/5</li>
                    <li>Did not follow instructions we gave him. Subpar. 2/5</li>
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        contentPosts: state.contentPosts.contentPostDetails
    };
}

export default connect(mapStateToProps)(ContentPostExpanded);