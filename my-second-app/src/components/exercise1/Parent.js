
import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  render() {
    return (
      <>
        i am a Parent
        <br></br>
        <Child />
      </>
    )
  }
}

export default Parent;