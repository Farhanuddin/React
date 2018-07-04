import React, { Component } from 'react';
import './App.css';

//Usign our custom component
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [{name: 'Max', age: 29}, {name: 'Ammar', age: 26}, {name: 'Rehan', age: 33}],
    showPersons: false,
    buttonText: 'Show List'
  }
  

  switchNameHandler = (NamePassed) => {
    console.log("switch handler");
   // this.state. = 'TCS-ECOM';
   //  this.setState({people[0].name: 'TCS-ECOM'});
    this.setState({ 
      people: [{name: NamePassed, age: 29}, {name: 'Ammar', age: 26}, {name: 'Rehan', age: 33}]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
        return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    }

    person.name = event.target.value;

    //update array 
    const persons = [...this.state.people];
    persons[personIndex] = person;
    
    this.setState({ 
      people: [persons]
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
    let persons = null;
    
    if(this.state.showPersons) {
        persons = (<div>

            {this.state.people.map((person, index) => {
               return <Person 
               key={person.id}
               click={this.deletePersonHandler.bind(this, index)}
               name={person.name} 
               age={person.age}
               changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
            
            </div>);
     }

    return (
      <div className="App">
         <h1>Hi, I Am Farhan, A React web Developer</h1>
         <button onClick={this.switchPersonHandler}>{this.state.buttonText}</button>
         {persons}
      </div>
    );
  }
}

export default App;
