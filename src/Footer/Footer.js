import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section id="contact">
      <div className="part2-footer">
        <div className="bilge">@2024 bilgekose All Right Reserved</div>
        <div className="footer-category">
          <>
            <a href="#contact">Contact</a>
            <a>Privacy</a>
            <a>Terms</a>
            <a href="/">About</a>
          </>
        </div>
        <div className="socialMedia-footer">
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
    </section>
  );
};
export default Footer;
