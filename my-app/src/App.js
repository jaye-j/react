
import React, { Component } from 'react'
import Child from './components/Child'
import News from './components/News'

class App extends Component {

  render() {

  let people = ['Matt', 'Eric', 'Tracy', 'Skylar', 'Melissa', 'Keith']

    return (
        <>
          <News />
        </>
    );
  }
}

App.propTypes = {

}

export default App
