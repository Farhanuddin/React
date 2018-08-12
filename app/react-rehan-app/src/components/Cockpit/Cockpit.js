import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    return (
        <div className={classes.Cockpit} >
            <h1>Hi, I Am Farhan, A React web Developer</h1>
            <p className={(props.length) < 3 ? classes.red : ''}>Life is Thrill, Life is Awesome</p>
            <button className={props.btnClass} onClick={props.click}>Switch Name</button>            
        </div>
        
    );
}

export default cockpit;