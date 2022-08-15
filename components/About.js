import React from "react";

function About() {
  return (
    <div>
      <section className="page-section bg-dark" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">About Scratch Records</h2>
              <hr className="divider" />
              <p className="text-white-75 mb-4">
                 Scratch Records searches, recognises, signs, produces
                and promotes artists of all gender and all genre of music.
                Scratch Records runs a recording studio and does music
                distribution too to music online stores and platforms.
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
