// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {
  constructor(props) {
    super(props)
  }

  logIt = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.logIt} type='password' />
    )
  }
}

export default Keypad
