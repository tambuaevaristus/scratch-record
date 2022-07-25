import Link from "next/link";
import React from "react";
import { FiMenu } from 'react-icons/fi';


function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link href="about">
          <a className="navbar-brand"><img src="/assets/logo.png" width={75} alt="" /></a>
        </Link>
        <button
          className="navbar-toggler hamburger hamburger-emphatic"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner">
                <FiMenu />
            </span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-center ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link" aria-current="page" href="#!">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a className="nav-link" aria-current="page" href="#!">
                  Services
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/project">
                <a className="nav-link" aria-current="page" href="#!">
                  Projects
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link" aria-current="page" href="#!">
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
