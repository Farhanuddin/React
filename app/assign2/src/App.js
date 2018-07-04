import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  
  //Input ChangeHandler function 
   state = {
      textLength:null,
      textz:null
   };

  changeHandler = (event) => {
    const textLength = event.target.value;
      this.setState({
          textLength:textLength.length,
          textz:event.target.value
      });
  }

  deleteChar = (charIndex) => {
    console.log("delete char" + charIndex);
    console.log(this.state.textz[0]);
    let temp = this.state.textz;//.splice();
    console.log('---');
    temp = temp.split("");
    temp.splice(charIndex, 1);
    console.log(temp);
    console.log(temp.join().replace(',', ''));
    temp = temp.join().replace(',', '');
    let tempLength = temp.length; 
    //let sdf = this.state.textz.split("").splice(charIndex, 1);
    //console.log("sdf"+ sdf);
    // let textx_arr = this.state.textz;
    // textx_arr = textx_arr.split("");
    // textx_arr.splice(charIndex, 1);
    // textx_arr = textx_arr.join();
    // textx_arr = textx_arr.replace(',', '');
    // console.log(textx_arr);

    this.setState({
        textz:temp,
        textLength:tempLength
    });

  }

  render() {

    let countText = null;
    let chars = null;
    let charsArray = null;

    if(this.state.textLength !== null){
      countText = (<div> 
                    <b>Text Length: </b> {this.state.textLength}
                   </div>
                  );

      charsArray = this.state.textz.split("");
      
      chars = (
        <div>
          {
            charsArray.map((ch, index) => {
              console.log("index" + index);
              return <Char key={index} ch={ch} del={() => this.deleteChar(index)}/>
            })            
          }
        </div> 
      );
    }

    return (
      <div className="App">
        <h1> Assignment No 2 (React)</h1>
        <br />
        <b>Text: </b><input type="text" value={this.state.textz} onChange={this.changeHandler} name="input" />
         {countText}
         <Validation textLength={this.state.textLength}/>
         {chars}
      </div>
    );
  }
}

export default App;
