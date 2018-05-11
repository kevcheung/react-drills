import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: ["kevin", "bob", "joe"]
    }
  }
  
  render() {
    let peeps = this.state.people.map((current, index) => {
    return (
      <h2 key={ index }>{ current }</h2>
    )
  })

  return(
    <div className="App">{ peeps }
    </div>
      );
    }
  }
export default App;
