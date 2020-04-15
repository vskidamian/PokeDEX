import React from 'react';
import './style.css';
import pokeball from '../../Images/pokeball.svg';
function Navbar() {
    return (
        <React.Fragment>
            <div className="loading">
                <div className="logo">
                    <img src={pokeball} className="pokeball" alt="pokeball"></img>
                </div>
                <div className="nav-search">

                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar