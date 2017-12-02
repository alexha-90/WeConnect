import React, { Component } from 'react';
import LoginModal from './subcomponents/LoginModal';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions';
//===============================================================================================//

class Header extends Component {
    constructor() {
        super();
        this.state = {
            loginShow: false,
            isLoggedIn: false
        };
        this.loginStatus = this.loginStatus.bind(this);
    }

    componentWillMount() {
        (async () => {
            try {
                return this.props.dispatch(isLoggedIn())
                    .then((result) => {
                        if (result === 'OK') {
                            this.setState({ isLoggedIn: true });
                        }
                        // user is not logged in
                    });
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
            }
        })();
    }

    loginStatus() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <a href='/profile'>View profile</a>
                </div>
            )
        }

        return (
            <div>
                <Button bsStyle="primary" onClick={() => this.setState({ loginShow: true })}>
                    Sign-up / Login
                </Button>
                <LoginModal show={this.state.loginShow} onHide={()=>this.setState({ loginShow: false })} />
            </div>
        )
    }



    render() {
        return (
            <div>
                <hr />
                <hr />
                <a href='/'>
                    <h1 style={{textAlign: 'center'}}>SocialConnector</h1>
                </a>

                <div style={{textAlign: 'right'}}>
                    {this.loginStatus()}
                </div>
            </div>

        )
    }



}

export default connect(null)(Header);