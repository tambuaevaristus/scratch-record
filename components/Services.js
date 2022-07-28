import React from "react";
import { TbMicrophone2} from "react-icons/tb";

import { BsCameraReels} from "react-icons/bs";
import { SiPrismic,SiMicrosoftacademic} from "react-icons/si";



function Services() {
  return (
    <div>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <TbMicrophone2 size={55} color="" />
                </div>
                <h3 className="h4 mb-2">Recording studio</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <BsCameraReels size={55} color=""  />
                </div>
                <h3 className="h4 mb-2">Video Editing</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-4">
                <SiMicrosoftacademic size={55} color=""  />
                </div>
                <h3 className="h4 mb-2">Music Training</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-4  rounded-circle p-4 border">
                <SiPrismic size={55} color=""  />
                </div>
                <h3 className="h4 mb-2">Live Performance</h3>
                <p className="text-muted mb-0">
                  Is it really open source if s not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
