import React from 'react';
import image from '../../assets/Images/image.png';
import classes from './Logo.module.css';

const logo=(props)=>
(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={image} alt="MyBurger"></img>
    </div>
);

export default logo;
