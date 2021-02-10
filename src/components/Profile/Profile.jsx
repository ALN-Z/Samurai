import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src="https://img5.goodfon.ru/wallpaper/nbig/6/c2/osen-nebo-listia-colorful-iaponiia-japan-red-klen-gora-fud-2.jpg" width="300px"></img>
    </div>
    <div>
      ava
    </div>
    <MyPosts/>

  </div>
}

export default Profile; 