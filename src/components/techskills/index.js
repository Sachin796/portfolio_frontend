import React, { Component } from "react";
import FrontEnd from "./frontend";
import BackEnd from "./backend";
import Database from "./database";
import Programming from "./programming";

import {
  frontendimages,
  frontendfigcation,
  backendimages,
  backendfigcation,
  databasedeploy,
  databasefigcation,
  proglanguages,
  programminglangfigcaption,
} from "./images";
import TechTemplate from "../technologiesTemplate/index";
import API from "../../utils/index";

class Techskills extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    API.getTechSkills().then((data) => console.log(data));
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
            <div style={{ width: "100%" }}>
              <h5>FRONT END TECHNOLOGIES</h5>
              <div className="" style={{ height: "auto" }}>
                <FrontEnd />
                {/* {frontendimages.map((imagesName, index) => {
                  return (
                    <TechTemplate
                      id={imagesName}
                      className="col l2 m12 s12"
                      src={imagesName}
                      figcaption={frontendfigcation[index]}
                    ></TechTemplate>
                  );
                })} */}
              </div>
            </div>
            <div>
              <h5 className="col l12 m12 s12">BACK END TECHNOLOGIES</h5>
              <div className="" style={{ height: "auto" }}>
                {/*  */}
                <fig className="col l4 m12 s12"></fig>
                <BackEnd />
                {/* {backendimages.map((imagesName, index) => {
                  return (
                    <TechTemplate
                      id={imagesName}
                      className="col l2 m12 s12"
                      src={imagesName}
                      figcaption={backendfigcation[index]}
                    ></TechTemplate>
                  );
                })} */}
                <fig className="col l4 m12 s12"></fig>
              </div>
            </div>
            <div>
              <h5 className="col l12 m12 s12">DATABASE AND DEPLOYMENT</h5>
              <div className="col l12 m12 s12" style={{ height: "auto" }}>
                {/*  */}
                <fig className="col l2 m12 s12"></fig>
                <Database />

                {/* {databasedeploy.map((imagesName, index) => {
                  return (
                    <TechTemplate
                      id={imagesName}
                      className="col l2 m12 s12"
                      src={imagesName}
                      figcaption={databasefigcation[index]}
                    ></TechTemplate>
                  );
                })} */}
                <fig className="col l4 m12 s12"></fig>
              </div>
            </div>
            <div>
              <h5 className="col l12 m12 s12">PROGRAMMING LANGUAGES</h5>
              <div className="col l12 m12 s12" style={{ height: "auto" }}>
                {/*  */}
                <fig className="col l4 m12 s12"></fig>
                <Programming />
                {/* {proglanguages.map((imagesName, index) => {
                  return (
                    <TechTemplate
                      id={imagesName}
                      className="col l2 m12 s12"
                      src={imagesName}
                      figcaption={programminglangfigcaption[index]}
                    ></TechTemplate>
                  );
                })} */}
                <fig className="col l4 m12 s12"></fig>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Techskills;
