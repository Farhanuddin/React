import React, { Component } from 'react';
import './App.css';

//Usign our custom component
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [{id: 1, name: 'Max', age: 29},
             {id: 2, name: 'Ammar', age: 26},
             {id: 3, name: 'Rehan', age: 33}]
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
    const persons = [...this.state.people];
    
    const personIndex = persons.findIndex(p => {
       return p.id === id;
    });

    persons[personIndex].name = event.target.value; 

    this.setState({ 
      people: persons
    });

}  

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.isShowPersons === true){
      persons = (
        <div>
          {
            this.state.people.map((person, index) => {
              return <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              delClick={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>

      );
      //adjust style
      style.backgroundColor = 'red';
    }

    let classes = ['red', 'bold'].join(' ');

    return (
      <div className="App">
         <h1>Hi, I Am Farhan, A React web Developer</h1>
         <p className={(this.state.people.length) < 3 ? classes : ''}>Life is Thrill, Life is Awesome</p>
         <button style={style} onClick={this.tooglePersonsHandler}>Switch Name</button>        
         {persons}         
     </div>
    );
  }
}

export default App;
