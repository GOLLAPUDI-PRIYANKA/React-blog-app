import React, {useState, useContext } from 'react'
import { useStoreState,useStoreActions, action } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';
import api from './api/posts'
import { format } from 'date-fns';

const NewPost = () => {
  // const [postTitle, setPostTitle] = useState('');
  // const [postBody, setPostBody] = useState('');
  // const {posts,setPosts}=useContext(DataContext);
  const navigate=useNavigate();

  const posts = useStoreState((state)=>state.posts)
  const postTitle = useStoreState((state)=>state.postTitle)
  const postBody = useStoreState((state)=>state.postBody)

  const savePost = useStoreActions((actions)=>actions.savePost);
  const setPostTitle = useStoreActions((actions)=>actions.setPostTitle);
  const setPostBody = useStoreActions((actions)=>actions.setPostBody);

  const handleSubmit =  (e) => {
      e.preventDefault();
      const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : "1";
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = { id, title: postTitle, datetime, body: postBody };
      savePost(newPost)
      navigate('/')
      
    };

    return (
    <main className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor='postTitle'>Title:</label>
          <input
            type='text'
            required
            id="postTitle"
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)}
          />
          <label htmlFor='postBody'>Post:</label>
          <textarea 
            id="postBody"
            required
            value={postBody}
            onChange={(e)=> setPostBody(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
    </main>
  )
}

export default NewPost