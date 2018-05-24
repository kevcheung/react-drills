import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "http://getwallpapers.com/wallpaper/full/3/a/a/587129.jpg" } />
      </div>
    );
  }
}

export default App;