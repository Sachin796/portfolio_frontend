import React from "react";

export const Details = (props) => (
  <div className={props.classname}>
    <p>{props.text}</p>
    <p>
      <a href={props.link}>{props.link_text}</a>
    </p>
  </div>
);
