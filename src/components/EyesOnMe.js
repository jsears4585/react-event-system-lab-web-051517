// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {
  constructor(props) {
    super(props)
  }

  buttonFocus = () => {
    console.log('Good!')
  }

  buttonBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.buttonFocus} onBlur={this.buttonBlur} type="text"></button>
    )
  }
}

export default EyesOnMe
