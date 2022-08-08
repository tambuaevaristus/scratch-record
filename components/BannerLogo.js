import Image from "next/image";
import React from "react";

function BannerLogo() {
  return (
    <div className=" position-relative py-5 bg-black">
      <img src="/assets/logoBanner.gif" className=" img-fluid" width="100%" />
    </div>
  );
}

export default BannerLogo;
