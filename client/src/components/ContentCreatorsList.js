import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchAllContentPosts } from '../actions/index';

// loading screen reference: https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering

// simplify response so not everything needs to be queried from DB. Just enough for preview. Then user can load more upon expanding

class ContentCreatorsList extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true
        };
        this.propagateContent = this.propagateContent.bind(this);
    }

    componentWillMount() {
        (async () => {
            try {
                this.props.dispatch(fetchAllContentPosts());
                return await this.setState({loadingComponent: false});

            } catch (err) {
                return alert('Error: Unable to retrieve results from the database. Please try again or notify us if the issue persists.');
            }
        })();
    }

    componentDidMount() {
        setTimeout(() => {
            return this.propagateContent();
        }, 500);
    }

    propagateContent() {
        // all individual contentPost objects will be placed in this array
        let comboArr = [];

        // iterate through dynamically sized object holding all contentPost objects and split each post individually
        for (let i = 0; i < this.props.getContentPosts.length; i++) {
            comboArr[i] = [
                this.props.getContentPosts[i]['content_post_id'], this.props.getContentPosts[i]['content_medium'], this.props.getContentPosts[i]['content_summary'], this.props.getContentPosts[i]['content_description'],
                this.props.getContentPosts[i]['content_ideal_match'], this.props.getContentPosts[i]['yt_upload_frequency'], this.props.getContentPosts[i]['yt_video_length'], this.props.getContentPosts[i]['yt_sub_count'], this.props.getContentPosts[i]['yt_view_count']
            ];
        }

        // for each content post, create a new container instance with summarized data
        return (
            <div>
                {console.log(comboArr)}
                {comboArr.map((item) => {
                    return (
                        <div className='contentCreatorContainer' key={item[0]}>
                            <ul>
                                <li key={'id:' + item[0] + '-1'}>Medium: {item[1]}</li>
                                <li key={'id:' + item[0] + '-2'}>Content summary: {item[2]}</li>
                                <li key={'id:' + item[0] + '-3'}>Content description: {item[3]}</li>
                                <li key={'id:' + item[0] + '-4'}>Content ideal match: {item[4]}</li>
                                <li key={'id:' + item[0] + '-5'}>YouTube upload frequency: {item[5]}</li>
                                <li key={'id:' + item[0] + '-6'}>YouTube typical video length: {item[6]}</li>
                                <li key={'id:' + item[0] + '-7'}>YouTube subscriber count: {item[7]}</li>
                                <li key={'id:' + item[0] + '-8'}>YouTube channel view count: {item[8]}</li>
                            </ul>

                            <Button bsStyle="success">
                                <Link to={"/contentPost/id:" + item[0]}>
                                    See more
                                </Link>
                            </Button>

                        </div>
                    )
                })}
            </div>
        );
    }

    render() {
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        return (
            <div>
                Want to leverage your social media presence to earn extra money?
                <Button bsStyle="success">
                    <Link to="newContentPost">
                        Create new listing
                    </Link>
                </Button>

                <br />

                <h1>Content creators looking to advertise:</h1>
                <div className='contentCreatorSection'>
                    {this.propagateContent()}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        getContentPosts: state.getContentPosts.contentPostDetails
    };
}

export default connect(mapStateToProps)(ContentCreatorsList);