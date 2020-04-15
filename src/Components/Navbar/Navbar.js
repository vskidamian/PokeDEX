import React from 'react';
import './style.css';
import logo from '../../Images/logo.svg';
function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="nav-search">

                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar