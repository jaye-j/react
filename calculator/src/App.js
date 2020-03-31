
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from './components/Calculator';
import './globalStyles.css';


class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{span: 4, offset: 5}}>

            <Calculator />

          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
