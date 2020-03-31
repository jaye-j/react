
import React, { Component } from 'react'
import Parent from "./components/exercise2/Parent";
import SimpleList from './components/SimpleList';
import SimpleDropDown from './components/SimpleDropDown';
import { Container, Row, Col } from 'react-bootstrap';
import Drop from './components/Drop';
import Calculator from './components/calculator/Calculator';
import Comments from './components/comments/Comments';

// let daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday"
// ];

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{span: 4, offset: 4}}>
            
            {/* Our App
            <br></br>

            <Parent /> */}
            {/* <SimpleList /> */}
            {/* <SimpleDropDown days={daysOfWeek} /> */}
            
            {/* <Drop days={daysOfWeek}/> */}

            <Comments />

          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;

