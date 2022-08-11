import React from "react";

export default function Team(props) {
  return (
    <div className="col-md-4 hover-overlay hover-zoom hover-shadow ripple col-lg-3 col-sm-6">
      <div className="card  mb-3">
        <img src={props.image} className="card-img-top" height="215px" alt="..." />
        <div className="card-body w-100 text-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="text-muted card-text">
            {props.role}
          </p>
       
        </div>
      </div>
    </div>
  );
}
