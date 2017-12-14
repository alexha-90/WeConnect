import React, { Component } from 'react';
import LoginModal from './subcomponents/LoginModal';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { isLoggedIn, logoutUser } from '../actions/auth';
//===============================================================================================//
// don't like how login button shows up for a split second


class Header extends Component {
    constructor() {
        super();
        this.state = {
            loginShow: false,
            isLoggedIn: false
        };
        this.loginStatus = this.loginStatus.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        this.setState({ isLoggedIn: result });
                    });
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }


    loginStatus() {
        if (this.props.auth.isLoggedIn) {
            return (
                <div>
                    <a href='/profile'>View profile</a>
                    &nbsp;&nbsp;
                    <Button bsStyle="warning" onClick={this.onLogout}>
                        Logout
                    </Button>
                </div>
            )
        }
        return (
            <div>
                <Button bsStyle="primary" onClick={ () => this.setState({ loginShow: true }) }>
                    Sign-up / Login
                </Button>
            </div>
        )
    }


    onLogout() {
        this.props.dispatch(logoutUser());
        return window.location.reload()
    }




    render() {

        return (
            <div className="headerContainer">
                <div id="navContentCreatorsLink">
                    <a href='/contentCreatorsList'>
                        <h4>Content Creators</h4>
                    </a>
                </div>

                <div id="navLogo">
                    <a href='/'>
                        <h1>&#8212; WeConnect &#8212;</h1>
                    </a>
                </div>

                <div id="navAdvertisersLink">
                    <a href='/advertisersList'>
                        <h4>Advertisers</h4>
                    </a>
                </div>

                <div id="loginAndProfileLinks">
                    {this.loginStatus()}
                    <LoginModal show={this.state.loginShow} onHide={()=>this.setState({ loginShow: false })} />
                </div>

            </div>

        )
    }


}

export default connect(mapStateToProps)(Header);

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    };
}