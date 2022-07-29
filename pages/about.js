import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import SubBanner from "../components/SubBanner";
import Team from "../components/Team";
import TextSection from "../components/TextSection";

function about() {
  return (
    <div>
      <Header />
      {/* <div className="container-fluid text-center bg-primary  py-5">

          <h1 className="mt-5">About</h1>
      </div> */}
      <SubBanner page="About" />
      <TextSection />

      <div className="container text-center py-5">
        <h1 className="my-4 fw-bold fs-3">Team Members</h1>
        <div className="row px-4 px-md-0  ">
          <Team
            name="Tambua"
            role="Brand Ambassador"
            image="/assets/banners/banner1.jpg"
          />
          <Team
            name="Tambua"
            role="Brand Ambassador"
            image="/team/pasi.png"
          />
          <Team
            name="Tambua"
            role="Brand Ambassador"
            image="/assets/banners/banner1.jpg"
          />
          <Team
            name="Tambua"
            role="Brand Ambassador"
            image="/assets/banners/banner1.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default about;
