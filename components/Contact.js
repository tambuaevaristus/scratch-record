import React from "react";
import { FaPhoneAlt,FaInstagram} from "react-icons/fa";
import { GiMegaphone } from "react-icons/gi";
import { FiYoutube ,FiTwitter} from "react-icons/fi";

import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="container py-5">
      <div className=" row">
        <div className=" col-md-6 col-lg-4 my-4">
          <div className="card">
            <div className="card-body text-center">
              <GiMegaphone size={80} color="grey" />
              <p className="card-text text-muted">
                +237 674421540 <br /> +237 695770772
              </p>
            </div>
          </div>
        </div>

        <div className=" col-md-6 col-lg-4 my-4">
          <div className="card">
            <div className="card-body text-center">
              <AiOutlineMail size={80} color="grey" />
              <p className="card-text text-muted">

              rholfterence@gmail.com

              </p>
              <p></p>

            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 my-4">
          <div className="card">
            <div className="card-body text-center">
              <FiYoutube size={80} color="grey" />
              <p className="card-text text-muted">
                Scratch <br /> Records
              </p>
            </div>
          </div>
        </div>

        <div className=" col-md-6 col-lg-4 my-4">
          <div className="card">
            <div className="card-body text-center">
              <FaInstagram size={80} color="grey" />
              <p className="card-text text-muted">
                Scratch <br /> Records
              </p>
            </div>
          </div>
        </div>

        <div className=" col-md-6 col-lg-4 my-4">
          <div className="card">
            <div className="card-body text-center">
              <AiOutlineFacebook size={80} color="grey" />
              <p className="card-text text-muted">
                Scratch <br /> Records
              </p>
            </div>
          </div>
        </div>

        <div className=" col-md-6 col-lg-4 my-4">
          <div className="card">
            <div className="card-body text-center">
              <FiTwitter size={80} color="grey" />
              <p className="card-text text-muted">
                Scratch <br /> Records
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
