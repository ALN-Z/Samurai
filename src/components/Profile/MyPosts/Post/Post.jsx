import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
            <img src="https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg"></img>
            {props.message}

            <div>
              <span>like {props.likeCounters}</span>
            </div>
          </div>
          
     
}

export default Post; 