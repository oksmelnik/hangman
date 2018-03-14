
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



  render() {

    return (
      <div>
    <h1>Your secret word</h1>
{this.props.word[0]+"  "}
{this.props.word[1]+"  "}
{this.props.word[2]+"  "}
{this.props.word[3]+"  "}
{this.props.word[4]+"  "}
  <h1>Make your guess </h1>
  <Character character={"a"}/>
  <Character character={"b"}/>
  <Character character={"c"}/>
  <Character character={"d"}/>
  <Character character={"e"}/>
  <Character character={"f"}/>
  <Character character={"o"}/>
  <image src='{this.props.image}'></image>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {

  return {
    word: reduxState.word,
    image: reduxState.image
  }
}

export default connect(mapStateToProps)(Board)
