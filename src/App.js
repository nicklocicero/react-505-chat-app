import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ['hi hi'],
    }
  }

  render() {
    return (
      <div className="App">
        <ChatWindow messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
