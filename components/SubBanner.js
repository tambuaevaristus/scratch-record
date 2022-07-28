import Image from "next/image";
import React from "react";

// import * as mdb from "mdb-ui-kit"; // lib
// import { Input } from "mdb-ui-kit"; // module
function SubBanner(props) {
  return (
    <div className='bg-image'>
    <img src='/assets/banners/banner3.jpg'className="w-100" height="250"  />
    <div className='mask ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className='d-flex justify-content-center my-5 align-items-center h-100'>
        <h1 className='text-white fw-bolder display-2'>{props.page}</h1>
      </div>
    </div>
  </div>
  );
}

export default SubBanner;
