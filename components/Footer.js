import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer align-content-center text-center  bg-black pt-5 pb-4 pb-lg-5">
        <div className="container pt-lg-4">
          <div className="row pb-5">
            <div className="col-lg-3   col-md-6">
              <div className="navbar-brand text-dark p-0 me-auto mb-3 mb-lg-4">
                <Image src="/assets/black-1.png" width={550} height={400} />
              </div>
              <form className="needs-validation">
                <label className="form-label">
                  Subscribe to our newsletter
                </label>
              </form>
            </div>
            <div className=" col-lg-2 col-md-6 pt-4 pt-md-1 pt-lg-0">
              <h4 className="text-muted fw-bold">Menu</h4>
              <div id="useful-links" className="">
                <ul className="nav flex-column text-white">
                  <li className="nav-item">
                  <Link href="/">
                    <a  className="nav-link text-muted  px-0 pt-1 pb-2">
                      Home
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link href="#about">
                    <a  className="nav-link text-muted  px-0 pt-1 pb-2">
                      About Us
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link href="#services">
                    <a  className="nav-link text-muted  px-0 pt-1 pb-2">
                      Services
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#contact">
                    <a  className="nav-link text-muted  px-0 pt-1 pb-2">
                      Contact
                    </a>
                    </Link>
                  </li>                 
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="text-white text-muted fw-bold">Socials</h4>
              <div className="collapsen">
                <ul className="  mb-2 mb-lg-0 d-flex justify-content-around my-4  my-lg-0 flex-lg-column d-lg-">
                  <li className="nav-item ">
                    <a
                      href="#"
                      className="nav-link text-muted d-inline-block px-0 pt-1 pb-2"
                    >
                      <FaTwitter size={40} />
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
                      <FaYoutube size={40} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
            <h4 className="text-muted fw-bold">Location</h4>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4119.8283083523165!2d9.71880313301004!3d4.038866837673434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061135b8b37c923%3A0x21ebaf461586f223!2sScratch%20Records%20Douala!5e1!3m2!1sen!2scm!4v1660561273705!5m2!1sen!2scm"
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
         
        </div>

        <div className="mt-5">
        <p className="nav d-block fs-xs text-center text-end pb-2 pb-lg-0 mb-0">
            <span className="text-light opacity-50">
              &copy; All rights reserved. Design by{" "}
            </span>
            <a
              className="nav-link text-muted d-inline-block p-0"
              href="mailto:evaristustambua@gmail.com"
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
