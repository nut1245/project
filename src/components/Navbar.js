import React, { useState } from "react";
import "./Navbar.css";
function Navbar(props) {
  const [search, setSearch] = useState("");

  const Search = (event) => {
    props.getPhotosSearch(search);
  };
  return (
    <div className="navigation">
      
      <div className="logo">
        <a className="no-underline" href="#">
          instagram
        </a>
      </div>
      <div className="navigation-search-container">
        <i className="fa fa-search" />
        <input
          className="search-field"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button class="button-6" onClick={Search}>
          ค้นหา{" "}
        </button>
        <div className="search-container">
          <div className="search-container-box">
            <div className="search-results"></div>
          </div>
        </div>
      </div>
      <div className="navigation-icons">
        <a
          href="https://instagram.com/mimoudix"
          target="_blank"
          className="navigation-link"
        >
          <i className="far fa-compass" />
        </a>
        <a className="navigation-link notifica">
          <i className="far fa-heart">
            <div className="notification-bubble-wrapper">
              <div className="notification-bubble">
                <span className="notifications-count">99</span>
              </div>
            </div>
          </i>
        </a>
        <a href="https://instagram.com/mimoudix" className="navigation-link">
          <i className="far fa-user-circle" />
        </a>
        <a
          href="https://instagram.com/mimoudix"
          id="signout"
          className="navigation-link"
        >
          <i className="fas fa-sign-out-alt" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
