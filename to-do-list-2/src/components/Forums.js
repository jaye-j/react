import React, { Component } from 'react';
import '../App.css'


class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtValue : "",
            isValid : true,
            selectValue : ""
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();
        console.log('button clicked');
    }

    handleChange = (e) => {

        let targetType = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        
        let name = e.target.name;

        this.setState({
            [name] : targetType

        })
        


    }


    render() {
        return (
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>

                    <input name="txtValue" value={this.state.txtValue} type="text" onChange={this.handleChange}/>

                    <br />

                    <input name="isValid" value={this.state.isValid} type="checkbox" onChange={this.handleChange}/>

                    <br />

                    <select name="selectValue" onChange={this.handleChange}>
                        <option value="NewYork">New York</option>
                        <option selected value="Houston">Houston</option>
                        <option value="Atlanta">Atlanta</option>
                        <option value="Seattle">Seattle</option>
                        <option value="Detroit">Detroit</option>
                    </select>

                    <br />

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
export default Forms

