
import React, { Component } from 'react'
import { Media } from 'react-bootstrap';
import data from './commentData';
import Comment from './Comment'

class Comments extends Component {
  render() {

    return (
        <>
        {data.comments.map((comment, index)=>{
            return (
                <Comment
                name={comment.name}
                description={comment.description}
                responses={comment.responses}
                />
            )
        })}
        </>
    )
  }
}

export default Comments
