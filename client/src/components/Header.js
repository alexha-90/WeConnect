import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from './subcomponents/LoginModal';

//check here to see if user is logged in


class Header extends Component {
    constructor() {
        super();
        this.state = {
            loginShow: false
        }
    }


    isLoggedIn() {
        switch (this.props.auth) {
            case true:
                 return <h1>Hello {this.props.auth.userName}!</h1>;

            // // in mailnet this links directly to proxy
            // case false:
            //     return <h1><a href="/auth/login">Login</a></h1>;

            default:
                return (
                    <div>
                        <div>
                            <Button bsStyle="primary" onClick={() => this.setState({ loginShow: true })}>
                                Sign-up / Login
                            </Button>
                            <LoginModal show={this.state.loginShow} onHide={()=>this.setState({ loginShow: false })} />
                        </div>

                    </div>

                );
        }
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
                    <a href='/profile'>View profile</a>

                    {this.isLoggedIn()}
                </div>
            </div>

        )
    }



}

export default Header;
