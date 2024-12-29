import React, { useState } from "react";
import "./Blog.css";
import Blogtwo from "./Blogtwo.js";
const data = [
  {
    id: 1,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img1.jpg",
  },
  {
    id: 2,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img2.jpg",
  },
  {
    id: 3,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img3.jpg",
  },
  {
    id: 4,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img4.jpg",
  },
  {
    id: 5,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img5.jpg",
  },
  {
    id: 6,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img6.jpg",
  },
  {
    id: 7,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img7.jpg",
  },
  {
    id: 8,
    title: "The Golden Sands Of Florida And California",
    author: "Bilge Kose",
    category: "Solo Travel",
    image: "/img8.jpg",
  },
];
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="blog">
      <div className="blog-container">
        <div className="blog-title-header">Featured Explore</div>
        <div className="grid-container">
          {currentItems.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="card-meta">
                  <a href="#" className="category">
                    {item.category}
                  </a>{" "}
                  <span className="author">
                    By <span className="name">{item.author}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            className="disable"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : "normal"}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
      <Blogtwo />
    </section>
  );
};
export default Blog;
