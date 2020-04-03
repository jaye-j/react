import React, { Component } from 'react';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      clicks : 0
    }
  }
  
  increment = () => {
    this.setState({
      clicks : this.state.clicks + 1
    })
  }

  reset = () => {
    this.setState({
      clicks : 0
    })
  }

  render() {
    return (
      <div style={{width: "110px", marginLeft: "auto", marginRight: "auto", paddingTop: "40px"}}>
        <H1 clicks={this.state.clicks}/>
        <br/>
        <H2 onReset={this.reset}/>
        <H3 onClickProp={this.increment}/>
      </div>
    )
  }
}

export default App

