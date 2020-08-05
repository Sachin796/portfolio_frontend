import React from "react";
import ResumeButton from "../resumebutton/resumebutton";

function AboutMe() {
  return (
    <div className="row center" id="aboutRow">
      <div id="cardRow">
        <div className="center" style={{ marginTop: "30px" }}>
          <h4>ABOUT ME</h4>
          <hr style={{ width: "5%" }}></hr>
        </div>
        <div className="image" id="about">
          <img
            src={process.env.REACT_APP_INTROIMG}
            style={{
              height: "210px",
              width: "230px",
              borderRadius: "50%",
              marginTop: "10px",
            }}
          />
        </div>
        <div className="l4 m6 s12" style={{ marginTop: "40px" }}>
          <p>
            My name is Sachin Jhaveri and I am a{" "}
            <span style={{ color: "orange" }}>FULL STACK DEVELOPER</span> in
            Toronto.
          </p>
          <p className="center">
            I'm passionate about learning new skills and technology. I am a
            person who is focused <br></br> more towards providing a practical
            solution to a given business/technical problem and <br></br>always
            looking forward to all the new opportunities that come along the
            way.
          </p>
          <ResumeButton text="RESUME" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
