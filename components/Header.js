import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    // <nav
    //   className="navbar navbar-expand-lg border-bottom fixed-top py-3"
    //   id="mainNav"
    // >
    //   <div className="container px-4 px-lg-5">
    //     <Link href="/">
    //       <a className="navbar-brand">
    //         <Image src="/assets/logo.png" width={80} height={50} alt="" />
    //       </a>
    //     </Link>
    //     <button
    //       className="navbar-toggler  navbar-toggler-right"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse " id="navbarResponsive">
    //       <ul className="navbar-nav ms-auto ">
    //       <li className="nav-item">
    //           <Link href="/">
    //             <a className="nav-link" aria-current="page">
    //               Home
    //             </a>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link href="/about">
    //             <a className="nav-link" aria-current="page" >
    //               About
    //             </a>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link href="/services">
    //             <a className="nav-link" aria-current="page">
    //               Services
    //             </a>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link href="/project">
    //             <a className="nav-link" aria-current="page">
    //               Projects
    //             </a>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link href="/contact">
    //             <a className="nav-link" aria-current="page">
    //               Contact
    //             </a>
    //           </Link>
    //         </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    // <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark header">
        <div className="container">
        <div className=" d-md-none">
              <Link href="/">
                <a className="navbar-brand">
                  <Image src="/assets/logo.png" width={80} height={50} alt="" />
                </a>
              </Link>
            </div>
          <button
            className="navbar-toggler  navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarResponsive"
          >
            <div className="d-none d-md-block">
              <Link href="/">
                <a className="navbar-brand">
                  <Image src="/assets/logo.png" width={80} height={50} alt="" />
                </a>
              </Link>
            </div>

            <ul className="navbar-nav ms-auto px-4 ">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" aria-current="page">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services">
                  <a className="nav-link" aria-current="page">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/project">
                  <a className="nav-link" aria-current="page">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link" aria-current="page">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    // </div>
  );
}

export default Header;
