import React, { Component} from 'react';
import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside Constructor' + props);    
    }

    componentWillMount(){
        console.log('[Person.js] component will Mount()');
      }
    
      componentDidMount(){
        console.log('[Person.js] componentDidMount()');
      }  
    
      render() {
        console.log('[Person.js] inside render()');

        return (<div className={classes.Person}>
            <p onClick={this.props.click}>I Am {this.props.name} and I am {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
            <button onClick={this.props.delClick} >Delete Him</button>
        </div>
        );
    }
}

export default Person;