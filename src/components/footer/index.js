import React from "react";

import {SiteLinks} from "../socialiconlinks";
export const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container center">
          <div className="row">
            <div className="col l6 s12">
              <SiteLinks></SiteLinks>
              <a className="grey-text text-lighten-3" href="#home">
                Home |
              </a>
              <a className="grey-text text-lighten-3" href="#about">
                &nbsp; About |
              </a>
              <a className="grey-text text-lighten-3" href="#project">
                &nbsp; Project |
              </a>
              <a
                className="grey-text text-lighten-3"
                href="#contactMeContainer"
              >
                &nbsp; Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright center">
          <div className="container">Copyright @ 2020 Sachin Jhaveri</div>
        </div>
      </footer>
    </div>
  );
};
