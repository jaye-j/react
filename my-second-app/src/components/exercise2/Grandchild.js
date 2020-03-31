import React, { Component } from 'react'

class Grandchild extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'lightblue', padding: '10px'}}>
        i am a grandchild
      </div>
    )
  }
}

export default Grandchild
