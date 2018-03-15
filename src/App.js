
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Board from "./components/Board"


class App extends Component {

render() {
    return (
      <div className="App">
          <h1 className='App-header'>Hangman</h1>
<Board />
          </div>
        )
  }
}

export default App
