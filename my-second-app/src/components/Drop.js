import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

class Drop extends Component {

    constructor(prop) {
        super(prop)
    }

  render() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Days of Week
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
                    {this.props.days.map((day, index) => {
                    return (
                    <Dropdown.Item key={index} value={day}>
                        {day}
                    </Dropdown.Item>
                    );
                })}
                
            </Dropdown.Menu>
        </Dropdown>
    )
  }
}

export default Drop
