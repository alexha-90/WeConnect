import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//check here to see if user is logged in


class Header extends Component {


    isLoggedIn() {
        switch (this.props.auth) {
            case true:
                return <h1>Hello {this.props.auth.userName}!</h1>;

            // in mailnet this links directly to proxy
            case false:
                return <h1><a href="/auth/login">Login</a></h1>;

            default:
                return (
                    <div>
                        <h3>Not logged in</h3>
                        <hr />
                        <hr />
                    </div>

                );
        }
    }


    render() {
        return (
            <div>

                <a href='/'>
                    <h1 style={{textAlign: 'center'}}>HandyHelper</h1>
                </a>
                <div style={{textAlign: 'right'}}>
                    <Link to='/profile'>
                        (Temp) View profile
                    </Link>

                    {this.isLoggedIn()}
                </div>
            </div>

        )
    }



}

export default Header;
