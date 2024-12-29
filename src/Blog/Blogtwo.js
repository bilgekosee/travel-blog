import React from "react";
import "./Blogtwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const blogData = [
  {
    id: 1,
    title: "13 Things I'd Tell Any New Traveler",
    author: "Bilge Kose",
    date: "10 Nov, 2020",
    comments: 50,
    image: "/img1.png",
  },
  {
    id: 2,
    title: "5 Things I'd Tell Any New Traveler",
    author: "Bilge Kose",
    date: "10 Nov, 2020",
    comments: 50,
    image: "/img2.png",
  },
  {
    id: 3,
    title: "15 Things I'd Tell Any New Traveler",
    author: "Bilge Kose",
    date: "10 Nov, 2020",
    comments: 50,
    image: "/img3.png",
  },
  {
    id: 4,
    title: "6 Things I'd Tell Any New Traveler",
    author: "Bilge Kose",
    date: "10 Nov, 2020",
    comments: 50,
    image: "/img4.png",
  },
  {
    id: 5,
    title: "12 Things I'd Tell Any New Traveler",
    author: "Bilge Kose",
    date: "10 Nov, 2020",
    comments: 50,
    image: "/img5.png",
  },
];

const Blogtwo = () => {
  return (
    <div className="blogtwo-container">
      <div className="blog2-header-title">My Latest Blog</div>

      <div className="blogtwo-wrapper">
        <div className="part-one">
          {blogData.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-info">
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-meta">
                  <span className="post">
                    <a href="#">Post</a> By{" "}
                    <strong style={{ color: "black" }}>{blog.author}</strong>
                  </span>
                  <br />
                  <span className="divider-center">
                    <span>{blog.date}</span>
                    <span className="date-divider"></span>
                    <span className="comments">{blog.comments} comments</span>
                  </span>
                </div>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sed et donec purus viverra.consectetur adipiscing elit.
                </p>
                <a href="#readmore" className="read-more">
                  READ MORE...
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="part-two">
          <div className="popular-posts">
            <h3>Popular Post</h3>
            {blogData.map((blog) => (
              <div key={blog.id} className="popular-blog-card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="popular-content">
                  <div className="blog-info">
                    <h3 className="popular-blog-title">{blog.title}</h3>
                    <div className="popular-blog-meta">
                      <span className="popular-post">
                        <a href="#" style={{ color: "#ffa902" }}>
                          Post
                        </a>{" "}
                        By{" "}
                        <strong style={{ color: "black" }}>
                          {blog.author}
                        </strong>
                      </span>
                      <br />
                      <span className="popular-divider-center">
                        <span>{blog.date}</span>
                        <span className="date-divider"></span>
                        <span className="comments">
                          {blog.comments} comments
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="twoPart-social-media">
            <h3>Follow Me</h3>
            <div className="social-media-icons">
              <a
                className="two-icon"
                href="https://x.com/bilgekoose?s=11&t=T0KG4CMlFJ5E3wcPtaYKpA"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                className="two-icon"
                href="https://www.instagram.com/bilge_kosee/profilecard/?igsh=MWdndnI1cXdoc29vaQ%3D%3D"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                className="two-icon"
                href="https://github.com/bilgekosee"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                className="two-icon"
                href="https://bilge-koose.netlify.app/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLaptop} size="lg" />
              </a>
            </div>
          </div>

          <div className="subscribe">
            <h3>Subscribe Today</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button>SUBSCRIBE</button>
          </div>

          <div className="tags">
            <h3>Tags</h3>
            <div className="tag-list">
              <a href="#tag">Travel Website</a>
              <a href="#tag">Travel Tips</a>
              <a href="#tag">Travel Tricks</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Blogtwo;
