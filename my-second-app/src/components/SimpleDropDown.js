import React, { Component } from 'react'

class SimpleDropDown extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        console.log(this.props.days)

        return (
        <>
            <select>
                {this.props.days.map((day, index) => {
                    return (
                    <option key={index} value={day}>
                        {day}
                    </option>
                    );
                })}
            </select>
        </>
        )
    }
}

export default SimpleDropDown;