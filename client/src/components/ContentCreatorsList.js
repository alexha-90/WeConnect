import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { allContentPostsGET } from '../actions/index';

// https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
// future expansion: referrals and reviews

//youtube api info
// https://www.googleapis.com/youtube/v3/channels?key={YOUR_API_KEY}&forUsername=klauskkpm&part=id
// http://johnnythetank.github.io/youtube-channel-name-converter/
// https://stackoverflow.com/questions/14366648/how-can-i-get-a-channel-id-from-youtube


class ContentCreatorsList extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true
        };
        this.propagateTasks = this.propagateTasks.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(allContentPostsGET());
        setTimeout(() => {
            //run action to query database and return all tasks
            return this.setState({ loadingComponent: false });
        }, 1000);
    }

    componentDidMount() {
        setTimeout(() => {
            return this.propagateTasks();
        }, 500);
    }

    propagateTasks() {

        // all individual contentPost objects will be placed in this array
        let comboArr = [];

        // iterate through dynamically sized object holding all contentPost objects and split each post individually
        for (let i = 0; i < this.props.allContentPosts.length; i++) {
            comboArr[i] = [this.props.allContentPosts[i]['form_id'], this.props.allContentPosts[i]['summary'], this.props.allContentPosts[i]['description'], this.props.allContentPosts[i]['category']];
        }

        // for each content post, make new container
        return (
            <div>
                {comboArr.map((item) => {
                    return (
                        <div className='contentCreatorContainer' key={item[0]}>
                            <ul>
                                <li key={item[0] + 'summary'}>Summary: {item[1]}</li>
                                <li key={item[0] + 'description'}>Description: {item[2]}</li>
                                <li key={item[0] + 'category'}>Category: {item[3]}</li>
                            </ul>
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
                    {this.propagateTasks()}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost,
        allContentPosts: state.allContentPosts.allContentPosts
    };
}

export default connect(mapStateToProps)(ContentCreatorsList);