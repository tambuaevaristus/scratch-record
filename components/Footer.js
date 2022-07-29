import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaTiktok
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
        <div className="container pt-lg-4">
          <div className="row pb-5">
            <div className="col-lg-4  col-sm-6">
              <div className="navbar-brand text-dark p-0 me-auto mb-3 mb-lg-4">
                <Image src="/assets/logo.png" width={300} height={200} />
              </div>
              <form className="needs-validation">
                <label className="form-label">
                  Subscribe to our newsletter
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    id="subscr-email"
                    className="form-control rounded-start ps-5"
                    placeholder="Your email"
                  />
                  <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                  <div className="invalid-tooltip position-absolute top-100 start-0">
                    Please provide a valid email address.
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-lg-7 col-sm-6 px-sm-4 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
              <div id="footer-links" className="row container">
                <div className="col-lg-4">
                  <h4 className="text-muted fw-bold">Menu</h4>
                  <div id="useful-links" className=" ">
                    <ul className="nav flex-column pb-lg-1 mb-lg-3 text-white">
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted px-0 pt-1 pb-2"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted  px-0 pt-1 pb-2"
                        >
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted  px-0 pt-1 pb-2"
                        >
                          Case Studies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted  px-0 pt-1 pb-2"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted  px-0 pt-1 pb-2"
                        >
                          News &amp; Insights
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3">
                  <h4 className="text-white text-muted fw-bold">Socials</h4>
                  <div className="collapsen">
                    <ul className="nav d-flex justify-content-between mb-2 mb-lg-0">
                      <li className="nav-item ">
                        <a
                          href="#"
                          className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                        >
                          <FaTwitter size={40} />
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          href="#"
                          className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                        >
                          <FaTelegram size={40} />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                        >
                          <FaFacebook size={40} />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                        >
                          <FaInstagram size={40} />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                        >
                          <FaTiktok size={40} />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                        >
                          <FaYoutube size={40} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="nav d-block fs-xs text-center text-end pb-2 pb-lg-0 mb-0">
            <span className="text-light opacity-50">
              &copy; All rights reserved. Design by{" "}
            </span>
            <a
              className="nav-link text-muted d-inline-block p-0"
              href="https://createx.studio/"
            >
              Tambua Evaristus
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
