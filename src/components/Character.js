import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/guess'


export class Character extends PureComponent {
  static propTypes = {
      value: PropTypes.number.isRequired,
      makeGuess: PropTypes.func.isRequired
    }

handleClick = () => {
  const orig = [ "h","e","l","l","o" ]
  if (orig.includes(this.props.character)) {
    this.props.makeGuess(this.props.character, 1)}
    else
    this.props.makeGuess(this.props.character, 0)
}

  render() {
    return(
      <button type="button" onClick={this.handleClick}>{this.props.character}</button>
      )
    }
}

const mapStateToProps = ({ word }) => ({ word })

export default connect (mapStateToProps, {makeGuess})(Character)
