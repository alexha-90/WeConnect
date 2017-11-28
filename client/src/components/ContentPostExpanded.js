import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleContentPost } from '../actions/';

// future expansion: referrals and reviews
// user should be able to load id page and see all respective contents

class ContentPostExpanded extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true
        };
        this.propagateExpandedContent = this.propagateExpandedContent.bind(this);
    }


    componentWillMount() {

        // get current url and extract id number. Query database for this primary key and return all relevant information
        let postID = Number(this.props.location.pathname.match(/[0-9]/g));
        this.props.dispatch(fetchSingleContentPost(postID));

        setTimeout(() => {

            return this.setState({loadingComponent: false});
        }, 1000);
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.props.allContentPosts.contentMedium);
            return this.propagateExpandedContent();
        }, 500);
    }

    propagateExpandedContent() {
        return (
            <div>
                <ul>
                    <li>Medium: {this.props.allContentPosts.contentMedium}</li>
                    <li>Content summary: {this.props.allContentPosts.contentSummary}</li>
                    <li>Content description: {this.props.allContentPosts.contentDescription}</li>
                    <li>Content ideal match: {this.props.allContentPosts.contentIdealMatch}</li>
                    <li>YouTube upload frequency: {this.props.allContentPosts.yt_UploadFrequency}</li>
                    <li>YouTube typical video length: {this.props.allContentPosts.yt_VideoLength}</li>
                    <li>YouTube subscriber count: {this.props.allContentPosts.yt_SubCount}</li>
                    <li>YouTube channel view count: {this.props.allContentPosts.yt_ViewCount}</li>
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
                {this.propagateExpandedContent()}

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
                <h1>Recent reviews:</h1>
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
        allContentPosts: state.allContentPosts.contentPostDetails
    };
}

export default connect(mapStateToProps)(ContentPostExpanded);

//                     <li>{this.loadExpandedContent()}</li>
