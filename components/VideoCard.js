import React from "react";

function VideoCard() {
  return (
    <div className=" my-4">
      <div className="card ">
        <iframe
          src="https://www.youtube.com/embed/pWahNIMRxR0"
          height={220}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to make up the bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
