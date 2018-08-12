import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js] inside Constructor' + props);    
  }

  componentWillMount(){
    console.log('[Persons.js] component will Mount()');
  }

  componentDidMount(){
    console.log('[Persons.js] componentDidMount()');
  }  

  //Component Update Lifecycle Funcs
  componentWillReceiveProps (nextProps) {
     console.log('[UPDATE Persons.js] Inside ComponentWillReceiveProps', nextProps);
  }  

  shouldComponentUpdate(nextProps, nextState){
     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
     return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
     console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
     console.log('[UPDATE Persons.js] Inside componentDidUpdate'); 
   }
  render() {
    console.log('[Persons.js] inside render()');
        return this.props.persons.map((person, index) => {
              return <Person  
              key={person.id}
              name={person.name} 
              age={person.age}
              delClick={this.props.clicked.bind(this, index)}
              changed={(event) => this.props.changed(event, person.id)}
              />
            })

    }
}

export default Persons;