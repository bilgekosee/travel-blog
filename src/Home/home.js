import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <span>Tot</span>oro
        </div>
        <div className="search">
          <i className="fas fa-search search-icon"></i>
          <input
            type="search"
            className="search-input"
            placeholder="Search your option"
          />
        </div>
        <div className="social-media-icons">
          <a
            className="icon"
            href="https://x.com/bilgekoose?s=11&t=T0KG4CMlFJ5E3wcPtaYKpA"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/bilge_kosee/profilecard/?igsh=MWdndnI1cXdoc29vaQ%3D%3D"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            className="icon"
            href="https://github.com/bilgekosee"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
