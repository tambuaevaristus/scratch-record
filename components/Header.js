import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <div className="container">
    //     <Link href="/">
    //       <a className="navbar-brand"><Image src="/assets/logo.png" width={75} height={45} alt="" /></a>
    //     </Link>
    //     <button
    //       className="navbar-toggler hamburger hamburger-emphatic"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="hamburger-box">
    //         <span className="hamburger-inner">
    //             <FiMenu />
    //         </span>
    //       </span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav flex-center ms-auto">
            // <li className="nav-item">
            //   <Link href="/">
            //     <a className="nav-link" aria-current="page">
            //       Home
            //     </a>
            //   </Link>
            // </li>
            // <li className="nav-item">
            //   <Link href="/about">
            //     <a className="nav-link" aria-current="page" >
            //       About
            //     </a>
            //   </Link>
            // </li>
            // <li className="nav-item">
            //   <Link href="/services">
            //     <a className="nav-link" aria-current="page">
            //       Services
            //     </a>
            //   </Link>
            // </li>
            // <li className="nav-item">
            //   <Link href="/project">
            //     <a className="nav-link" aria-current="page">
            //       Projects
            //     </a>
            //   </Link>
            // </li>
            // <li className="nav-item">
            //   <Link href="/contact">
            //     <a className="nav-link" aria-current="page">
            //       Contact
            //     </a>
            //   </Link>
            // </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <Link href="/">
          <a className="navbar-brand">
            <Image src="/assets/logo.png" width={80} height={50} alt="" />
          </a>
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-lg-0">
          <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link" aria-current="page" >
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
  );
}

export default Header;
