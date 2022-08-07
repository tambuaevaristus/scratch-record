import Image from "next/image";
import React from "react";

function BannerLogo() {
  return (
    <div className=" position-relative bg-black pt-5">
      <img
        src="/assets/logoBanner.gif"
        className="mt-4"
        width="100%"
        height="500"
      />
    </div>
  );
}

export default BannerLogo;
