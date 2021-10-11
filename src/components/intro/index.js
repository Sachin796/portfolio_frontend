import React from "react";
import Typed from "react-typed";
import {SiteLinks} from "../socialiconlinks";

export const Intro = () => {
  return (
    <div className="row" id="home">
      <div id="introDiv" className="center-align">
        <section>
          <h2 id="name">
            <Typed
              strings={["My name is Sachin", "I am a Web Developer"]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={1}
              loop
              smartBackspace
            />
          </h2>
        </section>
        <section id="description">
          <h6>A Full Stack Web Developer focusing on building </h6>
          <h6>efficient,reliable web application with </h6>
          <h6>great user experience .</h6>
        </section>
        <SiteLinks></SiteLinks>
      </div>
    </div>
  );
};
