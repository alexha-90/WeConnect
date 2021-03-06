import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadingSpinner } from './helper_functions';
import { ToastContainer, toast } from 'react-toastify';
//===============================================================================================//

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true,
            displayButton: true
        };
        this.displayRegisterButton = this.displayRegisterButton.bind(this);
    }

    componentWillMount() {
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                this.setState({ displayButton: false });
            }
            return this.setState({ loadingComponent: false });
        }, 300);
    }

    displayRegisterButton () {
        if (this.state.displayButton) {
            return <Button bsStyle="success">Register</Button>
        }
    }


    render() {
        if (this.state.loadingComponent) {
            return loadingSpinner();
        }

        return (
            <div className="landing">
                <div className="mainSplash">

                    {toastDevelopmentMessage()}
                    <ToastContainer autoClose={false} style={{color: '#ffffff', width: '80%', fontSize: '1.1em'}}/>

                    <img src="https://i.imgur.com/n6INZhE.png" alt="magnetSocialSmall" id="magnetSocialSmallImg" />

                    <Jumbotron id="jumbotron">
                        <div id="blurb">
                            <div>
                                <h1>Engage with the
                                    <br/>
                                    <span>world</span>
                                </h1>
                                <p>
                                    List your active social platforms and rough metrics. Advertisers will reach
                                    out to you if they are interested in partnering. Leverage our platform to reach
                                    out to influential content creators and expand your market presence. Promote a new product.
                                </p>

                                <br/>
                                <Button bsStyle="primary">
                                    <a href="https://github.com/alexha-90/WeConnect">
                                        GitHub source code
                                    </a>
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button bsStyle="info">
                                    <Link to="/contentCreatorsList">
                                        Browse content creators
                                    </Link>
                                </Button>
                                &nbsp;
                                {this.displayRegisterButton()}
                            </div>
                        </div>
                        <div id="jumboImage">
                            <img src="https://i.imgur.com/n6INZhE.png" alt="magnetSocial" />
                        </div>
                    </Jumbotron>
                </div>
                <div className="statistic">
                    <img src="https://png.icons8.com/dusk/300/000000/positive-dynamic.png" alt="chartGraphic" />
                    <h4>Did you know more people than ever are on the web and using social media? This is due
                        to the rapid growth in technology over the last decade and emergence of smartphones.
                        You want to be part of this wave. As a content creator, you can leverage this fact
                        to partner with advertisers and generate income. Advertiers can leverage this
                        to reach more people and promote the products they create.
                    </h4>
                </div>
                <div className="demo">
                    <img src="https://instapage.com/wp-content/uploads/2015/08/instapage.gif" alt="demo" />
                    <h4>Creating a new post</h4>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Landing);

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    };
}

const toastDevelopmentMessage = () => {

    const string = 'NOTE: this application is still under development. ' +
        'Please click the "GitHub source code" button above to see a list of bugs and what is being worked on.';

    toast.info(string , {
        position: toast.POSITION.BOTTOM_LEFT
    });
};