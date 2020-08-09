import React from "react";
import { SocialIcon } from "react-social-icons";

const Icon = (props) => (
  <>
    <SocialIcon
      network="github"
      target="_blank"
      url="https://github.com/Sachin796/Worktopia"
      rel="noopener noreferrer"
      style={{
        height: 40,
        width: 40,
        marginLeft: "40px",
        marginRight: "10px",
      }}
    />
    {props.text}
  </>
);

export default Icon;
