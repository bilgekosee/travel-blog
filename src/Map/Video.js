import React, { useState, useRef } from "react";
import "./Video.css";
import ReactModal from "react-modal";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsOpen(false);
  };

  return (
    <div className="video-section">
      <div className="overlay">
        <div className="content">
          <h1>Trips For Your First Solo Traveling</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
            donec purus viverra. Sit justo velit, eu sed sollicitudin tempus,
            risus. Sed sit elit mauris adipiscing. In sed et donec purus
            viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit
            elit mauris adipiscing.
          </p>
          <div className="play-button" onClick={handleOpenModal}>
            <div className="circle">
              <i className="fas fa-play"></i>
            </div>
          </div>
          <span className="watch-video">Watch Video</span>
        </div>
      </div>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Watch Video"
        className="video-modal"
        overlayClassName="video-overlay"
      >
        <button className="close-button" onClick={handleCloseModal}>
          X
        </button>
        <video
          ref={videoRef}
          controls
          autoPlay
          style={{ width: "100%", borderRadius: "10px" }}
        >
          <source
            src="https://videos.pexels.com/video-files/5834340/5834340-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </ReactModal>
    </div>
  );
};

export default Video;
