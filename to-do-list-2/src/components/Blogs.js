import React from 'react'

const Blogs = (props) => {
    return (
        <>
            Blogs Page
            <br/>

            {props.match.params.blogID}
        </>
    )
}

export default Blogs
