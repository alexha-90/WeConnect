import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchAllContentPosts } from '../actions/index';

// https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
// future expansion: referrals and reviews

//youtube api info
// https://www.googleapis.com/youtube/v3/channels?key={YOUR_API_KEY}&forUsername=klauskkpm&part=id
// http://johnnythetank.github.io/youtube-channel-name-converter/
// https://stackoverflow.com/questions/14366648/how-can-i-get-a-channel-id-from-youtube


// simplify response so not everything needs to be queried from DB. Just enough for preview. Then user can load more upon expanding

class ContentCreatorsList extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true
        };
        this.propagateContentPosts = this.propagateContentPosts.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchAllContentPosts());
        setTimeout(() => {
            //run action to query database and return all tasks
            return this.setState({ loadingComponent: false });
        }, 1000);
    }

    componentDidMount() {
        setTimeout(() => {
            return this.propagateContentPosts();
        }, 500);
    }

    propagateContentPosts() {

        // all individual contentPost objects will be placed in this array
        let comboArr = [];

        // iterate through dynamically sized object holding all contentPost objects and split each post individually
        for (let i = 0; i < this.props.allContentPosts.length; i++) {
            comboArr[i] = [
                this.props.allContentPosts[i]['content_post_id'], this.props.allContentPosts[i]['content_medium'], this.props.allContentPosts[i]['content_medium'], this.props.allContentPosts[i]['content_summary'], this.props.allContentPosts[i]['content_description'],
                this.props.allContentPosts[i]['content_ideal_match'], this.props.allContentPosts[i]['yt_upload_frequency'], this.props.allContentPosts[i]['yt_video_length'], this.props.allContentPosts[i]['yt_video_length'], this.props.allContentPosts[i]['yt_view_count']
            ];
        }

        // for each content post, make new container
        return (
            <div>
                {comboArr.map((item) => {
                    return (
                        <div className='contentCreatorContainer' key={item[0]}>
                            {console.log('id:' + item[0] + '-1')}
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
                Have an impressive profile you would like to share?
                <Button bsStyle="success">
                    <Link to="newContentPost">
                        Create new listing
                    </Link>
                </Button>

                <br />

                <h1>Content creators looking to advertise:</h1>
                <div className='contentCreatorSection'>
                    {this.propagateContentPosts()}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        allContentPosts: state.allContentPosts.contentPostDetails
    };
}

export default connect(mapStateToProps)(ContentCreatorsList);