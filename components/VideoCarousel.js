import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import "owl.carousel";
import VideoCard from "./VideoCard";

function VideoCarousel() {
  return (
    <div className="my-5 text-center">
        <h1>Recent Videos</h1>
      <OwlCarousel
        loop
        nav={false}
        // responsive={true}
        autoplay={true}
        dots={false}
        autoplayTimeout={5000}
        autoplaySpeed={5000}
        center={true}
      >
        <div className="item bg-whit col-12 p-3">
          <VideoCard />
        </div>
        <div className="item col-12 p-3">
          <VideoCard />
        </div>
        <div className="item col-12 p-3">
          <VideoCard />
        </div>
        <div className="item col-12 p-3">
          <VideoCard />
        </div>
        <div className="item col-12 p-3">
          <VideoCard />
        </div>
        <div className="item col-12 p-3">
          <VideoCard />
        </div>
        <div className="item col-12 p-3">
          <VideoCard />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default VideoCarousel;
