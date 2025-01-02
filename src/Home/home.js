import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Category from "../Category/Category";
import Blog from "../Blog/Blog";
import "./home.css";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="main-container">
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
          <div className="divider"></div>
          <div className="navbar">
            <span className="nav-icon">
              <a href="/">Home</a>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </span>
            <span className="nav-icon">
              <a href="/">About Me</a>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </span>
            <span className="nav-icon">
              <a href="#category">Category</a>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </span>
            <span className="nav-icon">
              <a href="#blog">Blog</a>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </span>
            <span className="nav-icon">
              <a href="#contact">Contact Me</a>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </span>
          </div>
          <div className="title-header">
            <h1 className="big-header-title">Where will you go next?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Let's Go....</h2>
          </div>
        </div>
      </div>
      <Category />
      <Blog />
      <Map />
      <Footer />
    </>
  );
};
export default Home;
