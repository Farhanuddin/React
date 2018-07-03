import React from 'react';

const person = (props) => {
    return (<div>
        <p onClick={props.click}>I Am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        <button onClick={props.delClick} >Delete Him</button>
    </div>
    )
}

export default person;