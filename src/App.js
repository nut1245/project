import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ViewProfile from "./pages/ViewProfile";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotosRandom = async () => {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID VfQXrqT9MqDFvWsOvTGWkJxXdBKikf8FnOBAXuLxTzo",
      },
      params: {
        count: 15,
        orientation: "squarish",
      },
    });
    setPhotos(response.data);
  };

  const getPhotosSearch = async (search) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID VfQXrqT9MqDFvWsOvTGWkJxXdBKikf8FnOBAXuLxTzo",
      },
      params: {
        query: search,
      },
    });
    setPhotos(response.data.results);
  };

  const getProfile = async (username) => {
    console.log(username);
    const response = await axios.get(
      `https://api.unsplash.com/users/${username}/photos`,
      {
        headers: {
          Authorization:
            "Client-ID VfQXrqT9MqDFvWsOvTGWkJxXdBKikf8FnOBAXuLxTzo",
        },
      }
    );
    setPhotos(response.data);
    console.log(response.data);
  };

  return (
    <Router>
      <Navbar getPhotosSearch={getPhotosSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home handledOnLoad={getPhotosRandom} photos={photos} />}
        />
        <Route
          path="/Profile/:username"
          element={<ViewProfile getProfile={getProfile} photos={photos} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
