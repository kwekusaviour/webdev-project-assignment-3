import React from "react";
import Video1 from "../assets/videos/video1.mp4";
import dialectaLogo from "../assets/videos/dialecta-logo.png";

const Background = ({ playStatus }) => {
  if (playStatus) {
    return (
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover" // Adjusted video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={Video1}
        type="video/mp4"
        alt="Video1"
      ></video>
    );
  } else {
    return (
      <img
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2  object-contain max-w-full max-h-screen p-4 sm:p-8 md:p-12 lg:p-16"
        src={dialectaLogo}
        alt="Dialecta Logo"
        loading="eager"
      />
    );
  }
};

export default Background;
