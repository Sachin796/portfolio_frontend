import React from "react";

const Button = (props) => (
  <button
    id={props.type}
    type={props.type}
    onClick={props.onclickevent}
    target="_blank"
    class="btn btn-default"
  >
    {props.text}
  </button>
);

export default Button;
