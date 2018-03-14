import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guess } from '../actions/guess'


export class Character extends PureComponent {
  static propTypes = {
      value: PropTypes.number.isRequired,
      makeGuess: PropTypes.func.isRequired
    }

handleClick = () => {
this.props.guess(this.props.character)
}

  render() {
    return(
      <button type="button" onClick={this.handleClick}>{this.props.character}</button>
      )
    }
}

const mapStateToProps = ({ word }) => ({ word })

export default connect (mapStateToProps, {guess})(Character)
