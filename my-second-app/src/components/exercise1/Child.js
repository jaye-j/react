import React, { Component } from 'react'
import Grandchild from './Grandchild'

class Child extends Component {
  render() {
    return (
      <>
        i am a Child
        <br></br>
        <Grandchild />
      </>
    )
  }
}

export default Child;