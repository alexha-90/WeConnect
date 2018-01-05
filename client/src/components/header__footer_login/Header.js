import React, { Component } from 'react';
import LoginModal from './LoginModal';
import { connect } from 'react-redux';
import { isLoggedIn, logoutUser } from '../../actions/auth';
import { Redirect } from 'react-router'
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
//===============================================================================================//
// don't like how login button shows up for a split second


class Header extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            loginShow: false,
            redirectToProfile: false
        };
        this.loginStatus = this.loginStatus.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.profileIcon = this.profileIcon.bind(this);
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

    profileIcon() {
        return (
            <div style={{display: 'inline-block'}}>
                <img src="https://i.imgur.com/FHLVEDd.png" alt="profileImg" />
                {this.state.username}
            </div>
        )
    }

    onLogout() {
        this.props.dispatch(logoutUser());
        return window.location.reload()
    }


    loginStatus() {
        if (this.props.auth.isLoggedIn) {
            return (
                <div>

                    <div id="newContentPostLink">
                        <a href='/newContentPost'>
                            Create new post
                        </a>
                    </div>

                    <div id="contentCreatorsLink">
                        <a href='/contentCreatorsList'>
                            Browse content creators
                        </a>
                    </div>

                    <ButtonToolbar id='profileDropdown'>
                        <DropdownButton title={this.profileIcon()} id=''>
                            <span className='dropdownItem'>
                                <a href='/profile'>
                                    View Profile
                                </a>
                            </span>
                            <hr/>
                            <span className='dropdownItem' onClick={this.onLogout}>
                                Logout
                            </span>
                        </DropdownButton>
                    </ButtonToolbar>
                </div>
            )
        } else {
            return (
                <div>
                    <div id="newContentPostLink">
                        <a href='/contentCreatorsList'>
                            Browse Content Creators
                        </a>
                    </div>

                    <div id="registerLoginLink">
                        <span onClick={() => this.setState({loginShow: true})}>
                            Register&nbsp;/&nbsp;Login
                        </span>
                    </div>
                </div>
            )
        }
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