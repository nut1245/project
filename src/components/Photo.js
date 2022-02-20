import React from "react";
import "./Photo.css";
const Photo = ({ img, likes }) => {
  return (
    <>
      <div class="image-box">
        <img src={img} />
        <div class="overlay">
          <div class="details">
            <h3 class="title">
              <a href="#">Likes</a>
            </h3>
            <span class="category">
              <a href="#">{likes}</a>
            </span>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Photo;
