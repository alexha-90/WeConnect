import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleContentPost } from '../actions/';

// future expansion: referrals and reviews

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
                this.props.dispatch(fetchSingleContentPost(postID));
                return await this.setState({loadingComponent: false});
            } catch (err) {
                return alert('Error: Something went wrong. We are unable to locate this contentPost. Please try again or notify us if the issue persists.');
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
                    <li>Medium: {this.props.getContentPosts.contentMedium}</li>
                    <li>Content summary: {this.props.getContentPosts.contentSummary}</li>
                    <li>Content description: {this.props.getContentPosts.contentDescription}</li>
                    <li>Content ideal match: {this.props.getContentPosts.contentIdealMatch}</li>
                    <li>YouTube upload frequency: {this.props.getContentPosts.yt_UploadFrequency}</li>
                    <li>YouTube typical video length: {this.props.getContentPosts.yt_VideoLength}</li>
                    <li>YouTube subscriber count: {this.props.getContentPosts.yt_SubCount}</li>
                    <li>YouTube channel view count: {this.props.getContentPosts.yt_ViewCount}</li>
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
                    Hire Me
                </Button>
                ______
                <Button bsStyle="warning">
                    <Link to="/ContentCreatorsList">
                        Back to results
                    </Link>
                </Button>

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
        getContentPosts: state.getContentPosts.contentPostDetails
    };
}

export default connect(mapStateToProps)(ContentPostExpanded);