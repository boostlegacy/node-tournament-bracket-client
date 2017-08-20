import React, { Component } from 'react';
import './App.css';
import * as io from 'socket.io-client';
import Node from './Node.js';
const bracket = require('./node-tournament-bracket');

var socket = io.connect('http://localhost:8080');

class App extends Component {
  constructor(props){
    super(props);
    this.socket = socket;
    this.socket.emit('getBracket');
    this.teams = null;
    this.state = {bracket:null};
    //this.bracket = null;
    this.best_of = null;
    this.type = null;
  }

  componentDidMount = () => {
    this.socket.on('bracket', (b) =>{
      this.best_of = b.best_of;
      this.type = b.type;
      this.teams = [];
      for(let team in b.teams){
        this.teams.push(new bracket.Team(b.teams[team]));     
      }
      let state_bracket = new bracket.Bracket({teams:this.teams, best_of:this.best_of, type:this.type})
      console.log(state_bracket);
      this.setState({bracket:state_bracket});
    });
  }

  componentWillUnmount = () => {
    this.socket.removeAllListeners('teams');
  }

  render_bracket_nodes = () => {
    if(this.state.bracket != null){
      return(<Node bracket_node={this.state.bracket.final_node} />)
      //return branch(this.state.bracket.final_node);
    }
  }


  render = () => {
    return (
      <div className="App">
        {this.render_bracket_nodes()}
      </div>
    );
  }
}

export default App;
