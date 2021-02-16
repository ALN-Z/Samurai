import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return <div> My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        <div className={s.posts}>
         <Post message='Hi, how are u?' likeCounters="17"/>
         <Post message="Its my first post" likeCounters="23"/>
        </div>
    </div>

  
}

export default MyPosts; 