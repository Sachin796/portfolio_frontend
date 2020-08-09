import React from "react";
import Recaptcha from "react-recaptcha";
const Captcha = (props) => (
  <>
    <Recaptcha
      sitekey={process.env.REACT_APP_SITE_KEY}
      render="explicit"
      onloadCallback={props.recaptchaLoaded}
      verifyCallback={props.verifyCallback}
    />
  </>
);

export default Captcha;
