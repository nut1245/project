import React, { useEffect } from "react";

import Posts from "../components/Posts";

function Home(props) {
  const handledOnLoad = () => {
    props.handledOnLoad();
  };

  useEffect(() => {
    handledOnLoad();
  }, []);
  function renderPosts() {
    return props.photos.map(function (photo) {
      return (
        <Posts
          profile_image={photo.user.profile_image.medium}
          username={photo.user.username}
          img={photo.urls.regular}
          likes={photo.likes}
          description={photo.description}
          key={photo.id}
        />
      );
    });
  }
  return <div>{renderPosts()}</div>;
}

export default Home;
