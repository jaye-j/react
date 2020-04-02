import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            txt : 'this is a text value',
            num1 : 5,
            num2 : 10
        }

        // setTimeout(() => {

        //     //set state with a function setState()
        //     this.setState({txt : "Hello World!"})

        // }, 5000)

    }

    // handleUpdate = () => {
        
    //     console.log('button was clicked');

    //     this.setState({
    //         txt : "Hello World",
    //         num1 : this.state.num1 + 1,
    //         num2 : this.state.num2 - 1
    //     });

    addUpdate = () => {
        this.setState({
            num1 : this.state.num1 + 3
        });
    };
    
    subUpdate = () => {
        this.setState({
            num1 : this.state.num1 - 3
        });
    };
    

    render() {

        // v DONT DO THIS TO CHANGE STATE, IT IS BAD
        //this.state.num1 = 5

        return (
            <>
                {/* <h1>{this.state.txt}</h1><br/>
                <h2>{this.state.num1} + {this.state.num2} = {this.state.num1 + this.state.num2}</h2><br/>
                <br/>
                <button onClick={this.handleUpdate}>Click Me</button> */}

                <h1>{this.state.num1}</h1>

                <button onClick={this.addUpdate}>+</button>

                <button onClick={this.subUpdate}>-</button>

            </>
        );
    }
}


// Child.propTypes = {
//     txt : PropTypes.string,
//     int : PropTypes.number.isRequired
// };

export default Child
