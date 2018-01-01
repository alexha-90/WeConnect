import React, { Component } from 'react';
import LoginModal from './LoginModal';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { isLoggedIn, logoutUser } from '../../actions/auth';
//===============================================================================================//
// don't like how login button shows up for a split second


class Header extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            loginShow: false,
        };
        this.loginStatus = this.loginStatus.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        this.setState({ username: result });
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
                <div className="loggedInLinks">
                    <div id="contentCreatorsLink">
                        <a href='/contentCreatorsList'>
                            Browse Content Creators
                        </a>
                    </div>

                    <div id="viewProfileLink">
                        <a href='/profile'>
                            <img src="http://alexha.io/images/profile_pic.jpeg" alt="profileImg" />
                            {this.state.username}
                        </a>
                    </div>
                    <div id="logoutLink">
                        <a href='' onClick={this.onLogout}>
                            Logout
                        </a>
                    </div>
                </div>
            )
        }
        return (
            <div className="loggedOutLinks">
                <div id="blankFiller" />
                <div id="contentCreatorsLink">
                    <a href='/contentCreatorsList'>
                        Browse Content Creators
                    </a>
                </div>

                <div id="registerLoginLink">
                    <span onClick={ () => this.setState({ loginShow: true }) }>
                        Register&nbsp;/&nbsp;Login
                    </span>
                </div>
            </div>
        )
    }



    onLogout() {
        this.props.dispatch(logoutUser());
        return window.location.reload()
    }

    render() {
        // console.log(this.props.auth);

        return (
            <div className="header">
                <div className="headerContainer">
                    <div id="navLogo">
                        <a href='/'>
                            <img src="https://i.imgur.com/Xit7ByD.png" alt="WeConnectLogo" />
                        </a>
                    </div>

                    <div className="rightContent">
                        {this.loginStatus()}
                    </div>

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