import React, { useState } from 'react'; 

import '../css/Menu.scss';

const Menu = (props) => {

    const [unit, setUnit] = useState('metric');

    const toggleUnits = () =>{
        props.toggleU();
    }

    const changeUnits = (e) => {
        toggleUnits();
        unit === 'metric' ? setUnit('imperial') : setUnit('metric');
    }
    
    return(
        <div className={`menu-${props.st}`}>
            <p className={`menu-item${props.units === 'metric' ? '-active' : ''}`} onClick={e => changeUnits(e)}>ºC</p> 
            <p className={`menu-item${props.units === 'imperial' ? '-active' : ''}`} onClick={e => changeUnits(e)}>ºF</p>
        </div>
    );
};

export default Menu;