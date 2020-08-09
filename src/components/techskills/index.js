import React, { Component } from "react";
import FrontEnd from "./frontend";
import BackEnd from "./backend";
import Database from "./database";
import Programming from "./programming";
import ScrollAnimation from "react-animate-on-scroll";
import {
  frontendimages,
  frontendimages2,
  frontendfigcation,
  frontendfigcation2,
  backendimages,
  backendfigcation,
  database,
  databasefigcation,
  deployment,
  deploymentfigcaption,
  aws1,
  aws2,
  aws1figcaption,
  aws2figcaption,
} from "./images";
import TechTemplate from "../technologiesTemplate/index";
import CommonTemplate from "./commonTemplate";
class Techskills extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <div
          className="row"
          style={{
            backgroundColor: "rgb(151, 151, 151,0.3)",
            height: "auto",
          }}
        >
          <div className="row center col l12 m12">
            <h3 id="techskills">
              TECH SKILLS <hr style={{ width: "10%" }} />
            </h3>
            {/* <FrontEnd /> */}

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ width: "100%" }}
            >
              <h5>FRONT END TECHNOLOGIES</h5>
              <div className="col l1 m1 s1" style={{ height: "auto" }}></div>
              <div className="" style={{ height: "auto" }}>
                {frontendimages.map((imagesName, index) => {
                  return (
                    <TechTemplate
                      id={imagesName}
                      className="col l2 m12 s12"
                      src={imagesName}
                      figcaption={frontendfigcation[index]}
                    ></TechTemplate>
                  );
                })}
              </div>

              <CommonTemplate
                marginTop="7vh"
                imgType={frontendimages2}
                figcaptionType={frontendfigcation2}
                classname="col l2 m12 s12"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-offset="300"
            >
              {/* <BackEnd /> */}
              <h5 className="col l12 m12 s12">BACK END TECHNOLOGIES</h5>
              <CommonTemplate
                marginTop="0px"
                imgType={backendimages}
                figcaptionType={backendfigcation}
                classname="col l2 m12 s12"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="2000"
              data-aos-offset="400"
            >
              {/* <Database /> */}
              <h5 className="col l12 m12 s12">DATABASE</h5>
              <CommonTemplate
                marginTop="0px"
                imgType={database}
                figcaptionType={databasefigcation}
                classname="col l2 m12 s12"
              />
            </div>
            {/* <Deployment /> */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="3000"
              data-aos-offset="500"
            >
              <h5 className="col l12 m12 s12">DEPLOYMENT</h5>
              <CommonTemplate
                marginTop="0px"
                imgType={deployment}
                figcaptionType={deploymentfigcaption}
                classname="col l4 m12 s12"
              />
            </div>

            {/* AWS */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="3000"
              data-aos-offset="600"
            >
              <h5 className="col l12 m12 s12">AWS</h5>
              <CommonTemplate
                marginTop="0px"
                imgType={aws1}
                figcaptionType={aws1figcaption}
                classname="col l1 m12 s12"
              />
              <CommonTemplate
                marginTop="7vh"
                imgType={aws2}
                figcaptionType={aws2figcaption}
                classname="col l4 m12 s12"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Techskills;
