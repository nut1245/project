import React from "react";
import './Profile.css';
  const Profile = ({
    profile_image,
    username,
    name,
    total_photos,
    total_likes,
    total_collections,
    location,
    instagram,
  }) => {
    return (

      <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <div className="profile">
          <div className="profile-image">
            <img src={profile_image} />
          </div>
          <div className="profile-user-settings">
            <h1 className="profile-user-name">{username}</h1>
            <button className="btn profile-edit-btn">ติดตาม</button>
            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true" /></button>
          </div>
          <div className="profile-stats">
            <ul>
              <li><span className="profile-stat-count">{total_likes}</span>จำนวนการไลค์</li>
              <li><span className="profile-stat-count">{total_photos}</span>โพสต์</li>
              <li><span className="profile-stat-count">{total_collections}</span>คอลเลคชั่น</li>
            </ul>
          </div>
          <div className="profile-bio">
            <p><span className="profile-real-name">ชื่อ :</span> {name}</p>
            <p><span className="profile-real-name">ที่อยู่ :</span> {location}</p>
            <p><span className="profile-real-name">instagram :</span> {instagram}</p>
          </div>
        </div>
      </div>
            
    );
  };


export default Profile;
