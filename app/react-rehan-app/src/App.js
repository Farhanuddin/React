import React, { Component } from 'react';
import './App.css';

//Usign our custom component
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [{name: 'Max', age: 29}, {name: 'Ammar', age: 26}, {name: 'Rehan', age: 33}]
  }

  switchNameHandler = (NamePassed) => {
    console.log("switch handler");
   // this.state. = 'TCS-ECOM';
   //  this.setState({people[0].name: 'TCS-ECOM'});
    this.setState({ 
      people: [{name: NamePassed, age: 29}, {name: 'Ammar', age: 26}, {name: 'Rehan', age: 33}]
    });
  }

  nameChangedHandler = (event) => {

    this.setState({ 
      people: [{name: 'Bloat', age: 29}, 
                {name: event.target.value, age: 26}, 
                {name: 'Rehan', age: 33}
            ]
    });

  }

  render() {
    return (
      <div className="App">
         <h1>Hi, I Am Farhan, A React web Developer</h1>
         <button onClick={this.switchNameHandler.bind(this, 'Roarrr...')}>Switch Name</button>
         <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
         <Person name={this.state.people[1].name} age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'Roarrr...')}
          changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
         <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
