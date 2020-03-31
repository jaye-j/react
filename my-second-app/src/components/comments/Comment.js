import React, { Component } from 'react'
import { Media } from 'react-bootstrap';



class Comment extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={this.props.img}
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5>{this.props.name}</h5>
                <p>
                    {this.props.description}
                </p>
                    {this.props.responses.map((response, index)=>{
                        return (
                            <Media>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={response.img}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>{response.name}</h5>
                                    <p>
                                        {response.description}
                                    </p>
                                </Media.Body>
                            </Media>
                                )
                            }
                        )
                    }
                    
            </Media.Body>
        </Media>
    )
 }
}

export default Comment;
