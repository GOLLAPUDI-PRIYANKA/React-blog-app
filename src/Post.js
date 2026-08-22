import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
const Post = ({ post }) => {
  return (
    <article className="post">
        {/* Fixed: Changed quotes to backticks and added the closing bracket '}' */}
        <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
        </Link>
        <p className='postBody'>
            {
                (post.body).length <= 25 ? post.body :
                `${(post.body).slice(0, 25)}...`
            }
        </p>
    </article>
  )
}

export default Post
