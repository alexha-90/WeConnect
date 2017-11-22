import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <h1 style={{textAlign: 'center'}}>HandyHelper</h1>
                </Link>
            </div>

        )
    }



}

export default Header;