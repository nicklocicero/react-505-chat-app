import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Nick",
    }
  }

  render() {
    return (
      <div className="ChatWindow">
        <h1>505 React Chattin</h1>
        <div className="window">
        {this.props.messages.map(message => {
          return <div>{message}</div>
        })}
        </div>
      </div>
    )
  }
}

export default ChatWindow;
