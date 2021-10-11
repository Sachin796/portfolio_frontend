import React from "react";

export const Button = (props) => (
  <button
    id={props.type}
    type={props.type}
    onClick={props.onclickevent}
    target="_blank"
    class="btn btn-default"
    rel="noopener noreferrer"
  >
    {props.text}
  </button>
);
