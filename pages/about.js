import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import SubBanner from "../components/SubBanner";
import TextSection from "../components/TextSection";

function about() {
  return (
    <div>
      <Header />
      {/* <div className="container-fluid text-center bg-primary  py-5">

          <h1 className="mt-5">About</h1>
      </div> */}
      <SubBanner />
      <TextSection />

      <Footer />
    </div>
  );
}

export default about;
