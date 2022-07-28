import React from "react";

export default function Team(props) {
  return (
    <div className="col-md-3">
      <div className="card mb-3">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="text-muted card-text">
            {props.role}
          </p>
       
        </div>
      </div>
    </div>
  );
}
