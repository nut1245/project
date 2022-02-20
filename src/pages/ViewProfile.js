import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile";
import Photo from "../components/Photo";

function ViewProfile(props) {
    const params = useParams();
    useEffect(() => {
      console.log(params.username);
      props.getProfile(params.username);
    }, []);
    function renderPhoto() {
      return props.photos.map(function (photo) {
        return (
          <Photo
            img={photo.urls.full}
            likes={photo.likes}
          />
        );
      });
    }
    function renderProfile() {
      if (props.photos)
        return (
          <div>
            <Profile
              profile_image={props.photos[0].user.profile_image.large}
              username={props.photos[0].user.username}
              name={props.photos[0].user.name}
              total_photos={props.photos[0].user.total_photos}
              total_likes={props.photos[0].user.total_likes}
              total_collections={props.photos[0].user.total_collections}
              location={props.photos[0].user.location}
              instagram={props.photos[0].user.instagram_username}
            />
            <div className="image-gallery">{renderPhoto()}</div>
          </div>
        );
    
    }
  
    return <div>{renderProfile()}</div>;
  }

export default ViewProfile;
