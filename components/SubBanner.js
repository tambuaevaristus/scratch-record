import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// import * as mdb from "mdb-ui-kit"; // lib
// import { Input } from "mdb-ui-kit"; // module
function SubBanner() {
  return (
    <div className='bg-image' style={{ maxWidth: '24rem' }}>
    <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <p className='text-white mb-0'>Can you see me?</p>
      </div>
    </div>
  </div>
  );
}

export default SubBanner;
