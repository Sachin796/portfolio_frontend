import React from "react";
import { SocialIcon } from "react-social-icons";

function Projects() {
  return (
    <>
      <div className="row" id="projectRow">
        <div style={{ height: "auto" }}>
          <h4 id="justcolor" className="center" style={{ marginTop: "10px" }}>
            PROJECTS
          </h4>
          <hr style={{ width: "7%", marginBottom: "55px" }}></hr>

          <div className="project1div" id="project">
            <div
              className="row"
              style={{
                marginBottom: "65px",
              }}
            >
              <div className="col l5 m12 s12 center">
                <img
                  src={process.env.REACT_APP_PROJECTIMG1}
                  height="250px"
                  width="370px"
                />
              </div>
              <div className="col l5 m12 s12 center">
                <div className="center">WORKTOPIA</div>
                <h5 style={{ marginBottom: "20px" }}>
                  &ldquo; An application where users can either post office
                  spaces for rent or search for work spaces to rent. &rdquo;
                </h5>
                <div style={{ color: "rgb(245, 176, 48)" }}>
                  Technologies Used
                </div>
                <div style={{ fontWeight: "bold" }}>
                  <p>Front End :- HTML / CSS / BOOTSTRAP / REACT </p>
                  <p>
                    Server Side :- MOMENT / EXPRESS / NODE / AWS (S3 bucket)
                  </p>
                  <p>Backend :- SEQUELIZE / MYSQL </p>
                </div>

                <div style={{ marginTop: "55px" }}>
                  <SocialIcon
                    network="github"
                    target="_blank"
                    url="https://github.com/Sachin796/Worktopia"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px",
                    }}
                  />
                  GitHub
                  <SocialIcon
                    network="vsco"
                    target="_blank"
                    url="https://frozen-spire-07685.herokuapp.com/"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px",
                    }}
                  />
                  Live
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                height: "auto",
              }}
            >
              <div className="col l5 m12 s12 center" id="project1img">
                <img
                  src={process.env.REACT_APP_PROJECTIMG2}
                  height="250px"
                  width="400px"
                />
              </div>
              <div className="col l5  m12 s12 center">
                <div className="center ">FINANCR</div>

                <h5 style={{ marginBottom: "20px" }}>
                  &ldquo; Financr is an app that caters to the needs of the
                  financially savy and allows them to make well informed
                  decisions about their purchases &rdquo;
                </h5>
                <div style={{ color: "rgb(245, 176, 48)" }}>
                  Technologies Used
                </div>
                <div style={{ fontWeight: "bold" }}>
                  <p>Front End :- HTML / CSS / HANDLEBARS / MATERIALIZE</p>
                  <p>Server Side :- LEAFLET / EXPRESS / NODE</p>
                  <p>Backend : MYSQL </p>
                </div>
                <div style={{ marginBottom: "40x", marginTop: "55px" }}>
                  <SocialIcon
                    network="github"
                    target="_blank"
                    url="https://github.com/Sachin796/Project-2"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px",
                    }}
                  />
                  GitHub
                  <SocialIcon
                    network="vsco"
                    target="_blank"
                    url="https://financr-6d.herokuapp.com/"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px",
                    }}
                  />
                  Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
