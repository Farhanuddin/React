import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
//Usign our custom component
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] inside Constructor' + props);

  }

  componentWillMount(){
    console.log('[App.js] component will Mount()');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }

  state = {
    people: [{id: 1, name: 'Max', age: 29},
             {id: 2, name: 'Ammar', age: 26},
             {id: 3, name: 'Rehan', age: 33}],
    isShowPersons: false             
  }
  
  //For Toggling List View on and off
  tooglePersonsHandler = () => {
    const doesShow = this.state.isShowPersons;
    this.setState({
      isShowPersons: !doesShow
    });
  }

  //Delete Person object handler
  deletePersonHandler = (personIndex) => {
     //let persons = this.state.people.concat.slice();
      const persons = [...this.state.people];
      persons.splice(personIndex, 1);
     //Updating new Person list object
     this.setState({
        people: persons
     });
  }

  //Input handling function
  nameChangedHandler = (event, id) => {
    let persons = [...this.state.people];
    
    const personIndex = persons.findIndex(p => {
       return p.id === id;
    });

    persons[personIndex].name = event.target.value; 

    //update array     
    this.setState({ 
      people: persons
    });

}  

  //Delete Person Handler
  deletePersonHandler = (personIndex) => {
     //const persons = this.state.people.slice;
     const persons = [...this.state.people];
     persons.splice(personIndex, 1);
     this.setState({
        people: persons
     })
  }

  switchPersonHandler = () => {
      let don;
      let don2;
      if(this.state.showPersons){
        don=false;
        don2 = 'Show list';
      }else{
        don=true;
        don2 = 'Hide list';
      }

    this.setState({
        showPersons: don,
        buttonText: don2
    })
  }
  
  render() {
    console.log("[App.js] inside render()");
    let persons = null;
    let btnClass = '';

    if(this.state.isShowPersons === true){
      persons = (
         <Persons clicked={this.deletePersonHandler}
          persons={this.state.people}
          changed={this.nameChangedHandler}
         />

      );
      //adjust style
      //style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }
      //Setting button css
      btnClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' ');

    return ( 
          <div className={classes.App}>
            <Cockpit length={this.state.people.length}
              btnClass={btnClass}
              click={this.tooglePersonsHandler}   
            />
            {persons}         
          </div>

    );
  }
}

export default (App);
