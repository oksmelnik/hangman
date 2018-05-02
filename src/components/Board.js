
// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Character from './Character'
import { connect } from 'react-redux'


export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }

renderWord = (value) => {
  return <Character character={value}/>
}

renderSecretWord = (value) => {
  return value + " "
}

  render() {
    const hangImg = [
          'http://dinder.de/images/hangman/1.png',
          'http://dinder.de/images/hangman/2.png',
          'http://dinder.de/images/hangman/3.png',
          'http://dinder.de/images/hangman/4.png',
          'http://dinder.de/images/hangman/5.png',
          'http://dinder.de/images/hangman/6.png',
          'http://dinder.de/images/hangman/7.png',
        ]
const letters = ["a","b","c","d","e","f","g","h","o"]

    return (
      <div>
    <h1>Your secret word</h1>
{this.props.word.map(this.renderSecretWord)}

  <h1>Make your guess </h1>
  {letters.map(this.renderWord)}

<img src={hangImg[this.props.guess.length]}/>

      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {

  return {
    word: reduxState.word,
    guess: reduxState.guess
  }
}

export default connect(mapStateToProps)(Board)
