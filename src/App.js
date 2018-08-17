import React, { Component } from 'react';
//import './App.css';
import ChatWindow from './ChatWindow'
import ChatInput from './ChatInput'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ['hi hi',],
    }
  }

  addNewMessage = message => {
    this.setState({ messages: [...this.state.messages , message]})
  }

  render() {
    return (
      <div className="App">
        <ChatWindow messages={this.state.messages}/>
        <ChatInput addNewMessage={this.addNewMessage}/>
      </div>
    );
  }
}

export default App;
