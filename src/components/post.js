import React from "react"
import {Link} from "react-router-dom"

const Post = ({post}) => {
    const div = {
        textAlign: "center",
        border: "4px solid",
        margin: "10px auto",
        width: "60%"
    }

    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
        </Link>
        <h2>{post.comments}</h2>
    </div>
}

export default Post;




// const Post = ({post}) => {
//     /////////////////////
//     // Style Objects
//     /////////////////////

//     }

// export default Post;