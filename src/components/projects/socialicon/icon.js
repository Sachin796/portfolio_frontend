import React from "react";
import { SocialIcon } from "react-social-icons";

const Icon = (props) => (
  <>
    {console.log(props)}
    <SocialIcon
      network={props.network}
      target="_blank"
      url={props.url}
      rel="noopener noreferrer"
      style={props.style}
    />
    {props.text}
  </>
);

export default Icon;
