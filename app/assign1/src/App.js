import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    usernames: [{'name': 'Rehan'}, {'name': 'Ali'}]
  }
  
  usernameChangeHandler = () => {
    this.setState({
      usernames: [{'name': 'TCS-ECOM'}, {'name': 'Gaditek'}]   
    })
  }

  inputEventHandler = (event) => {
    this.setState({
      usernames: [{'name': event.target.value}, {'name': 'Gaditek'}]
    })           
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.usernameChangeHandler}>Click Button to </button>
          <UserInput changeEvent={this.inputEventHandler}/>
          <UserOutput username={this.state.usernames[0].name}/>
          <UserOutput username={this.state.usernames[1].name}/>
      </div>
    );
  }
}

export default App;
