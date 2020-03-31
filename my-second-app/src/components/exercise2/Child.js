import React, { Component } from 'react'
import Grandchild from './Grandchild'

class Child extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'yellow', padding: '10px'}}>
        i am a child
        <br></br>
        <Grandchild />
      </div>
    )
  }
}

export default Child
