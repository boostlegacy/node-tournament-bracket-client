import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as io from 'socket.io-client';

var socket = io.connect('http://localhost:8080');

class App extends Component {
  constructor(props){
    super(props);
    this.socket = socket;
    this.socket.emit('getTeams');
  }

  componentDidMount = () => {
    this.socket.on('teams', (teams) =>{
      console.log(teams);
    });
  }

  componentWillUnmount = () => {
    this.socket.removeAllListeners('teams');
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
