import React, { Component } from 'react';
import './Node.css';
//import * as io from 'socket.io-client';
//import Node from './Node.js';
//const bracket = require('./node-tournament-bracket');

//var socket = io.connect('http://localhost:8080');

class Node extends Component {
  constructor(props){
    super(props);
  }

    /*
  componentDidMount = () => {
  }

  componentWillUnmount = () => {
  }
  */

  render_upper = () => {
      if(this.props.bracket_node.upper_node !== null){
        return (<Node bracket_node={this.props.bracket_node.upper_node} />)
      }

  }

  render_lower = () => {
      if(this.props.bracket_node.lower_node !== null){
        return (<Node bracket_node={this.props.bracket_node.lower_node} />)
      }
  }


  render = () => {
    return (
      <span className="Node">
          <span className="NameArea">{this.props.bracket_node.name}</span>
          <span className="NodeArea">
          {this.render_upper()}<br/>
          {this.render_lower()}
          </span>
      </span>
    );
  }
}

export default Node;
