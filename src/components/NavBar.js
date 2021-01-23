import React, { useState } from 'react'; 

import './NavBar.css';

const NavBar = (props) => {

    const [hambState, updateHambState] = useState('hamb-line');

    const handleMenuChange = () => {
        props.toggle();
    }

    const hambHandler = (e) => {
        handleMenuChange();
        hambState === 'hamb-line-open' ? updateHambState('hamb-line') : updateHambState('hamb-line-open');
    }

    return(
        <div className="navbar">
            <h1 className="logo">JWeather</h1>
            <div className="hamburger-icon" onClick={e => hambHandler(e)}>
                <div className={`${hambState}1`}></div>
                <div className={`${hambState}2`}></div>
                <div className={`${hambState}3`}></div>
            </div>
        </div>
    );
};

export default NavBar;
