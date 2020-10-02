import React from 'react';
import Logo from '../images/logo.svg';

const Header = () => {


    return (
        <div className="desktop-header">
            <div className="desktop-nav">
                <img src={Logo} className='logo' alt='Shortly' />
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>
            <div className="desktop-nav-btns">
                <p>Login</p>
                <p>Sign Up</p>
            </div>
        </div>
    )
}

export default Header;