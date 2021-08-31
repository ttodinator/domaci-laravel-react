import React from 'react';
import Logo from './slike/logo.png'

function Footer() {
    return (
        <div>
            <nav className="navbar fixed-bottom">
                <a class="navbar-brand">
                    <img id="logo" src={Logo}></img>
                    Petar Todic 2021 All right reserved
                </a>
            </nav>
        </div>
    );
}

export default Footer;
