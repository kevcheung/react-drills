import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

updateText(e){
  this.setState({ text: e })
}

  render() {
    return (
      <div className="App">
      <input onChange={ (e) => this.updateText(e.target.value) } type ="text" />
      <p>{ this.state.text }</p>
      </div>
    );
  }
}

export default App;
