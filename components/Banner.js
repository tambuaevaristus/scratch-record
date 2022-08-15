import React from "react";
import Head from "next/head";

function Banner() {
  return (
    <div>
     
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">

          
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end my-md-3 ">
              <h1 className="text-white display-1 header-text">SCRATCH RECORDS</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">THE SUBMIT OF ENTERTAINMENT</p>
              <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header> 

     
    </div>
  );
}

export default Banner;
