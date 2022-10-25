import React from 'react'
import photo from '../assets/preston.jpeg'
const Profile = () => {
  return (
    <div>
      <div className='profile_img'> 
        <img id="profile__img" src={photo} alt="profile_img" />
        <p id='name'>Preston</p>
        <p id='slack'>@PrestonOsoro</p>
      </div>
    </div>
  )
};

export default Profile

