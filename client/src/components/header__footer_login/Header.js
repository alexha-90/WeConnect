import React, { Component } from 'react';
import LoginModal from './LoginModal';
import { connect } from 'react-redux';
import { isLoggedIn, logoutUser } from '../../actions/auth';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
                    <hr id="mobileLine"/>

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

                    <div id="profileDropdown">
                        <Nav>
                            <NavDropdown eventKey={1} title={this.profileIcon()} id="userDropdown">
                                <MenuItem eventKey={1.1} href='/profile'>
                                        View Profile
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.2} onClick={this.onLogout}>
                                    Logout
                                </MenuItem>
                            </NavDropdown>
                        </Nav>
                    </div>
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
                {/* using bootstrap navbar
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href='/'>
                                <img src="https://i.imgur.com/Xit7ByD.png" alt="WeConnectLogo" />
                            </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                */}


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