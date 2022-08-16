import React from "react";
import { TbMicrophone2} from "react-icons/tb";

import { BsCameraReels} from "react-icons/bs";
import { SiPrismic,SiMicrosoftacademic} from "react-icons/si";



function Services() {
  return (
    <div>
      <section className="page-section bg-dark text-white" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">


            <div className="col-lg-3  col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3 text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <TbMicrophone2 size={55} color="" />
                </div>
                <h3 className="h4 mb-2">Recording <br/> studio</h3>
                <p className="text-muted mb-0">
Well equiped Studio for music production
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <BsCameraReels size={55} color=""  />
                </div>
                <h3 className="h4 mb-2">Video <br/> Editing</h3>
                <p className="text-muted mb-0">
                    Video coverage and Editing 
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                <SiMicrosoftacademic size={55} color=""  />
                </div>
                <h3 className="h4 mb-2">Music <br/> Training</h3>
                <p className="text-muted mb-0">
                  Run an intense music training from begginer to advance
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                <SiPrismic size={55} color=""  />
                </div>
                <h3 className="h4 mb-2">Live <br/> Performance</h3>
                <p className="text-muted mb-0">
                  Available for live performance
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
