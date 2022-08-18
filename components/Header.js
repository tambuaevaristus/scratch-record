import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoThreeBars} from "react-icons/go";

function Header() {
  return (
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
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GoThreeBars size={30} />
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
                  <a className="nav-link text-white font-weight-bold active-link" >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about">
                  <a className="nav-link text-white font-weight-bold" >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#services">
                  <a className="nav-link text-white font-weight-bold">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#gallery">
                  <a className="nav-link text-white font-weight-bold">
                    Gallery
                  </a>
                </Link>
              </li>
            
              <li className="nav-item">
                <Link href="#contact">
                  <a className="nav-link text-white font-weight-bold">
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
