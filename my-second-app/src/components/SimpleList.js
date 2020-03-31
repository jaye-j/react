import React, { Component } from 'react'

class SimpleList extends Component {

    render() {
        let days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        return <>{days.map((day, index)=>{
            return <li key={index} style={{listStyleType: 'none'}}>{day}</li>
        })}</>;
    }
}

export default SimpleList;
