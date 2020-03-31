import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'blue', padding: '10px'}}>
        I am a parent
        <br></br>
        <Child />
      </div>
    )
  }
}

export default Parent;
