import React, { MouseEventHandler } from "react";

type Props = {
  text: string;
  type: string;
  onclickevent: MouseEventHandler;
};

const Button = ({ type, onclickevent, text }: Props) => (
  <button
    id={type}
    // type={type}
    onClick={onclickevent}
    target="_blank"
    className="btn btn-default"
    rel="noopener noreferrer"
  >
    {text}
  </button>
);

export default Button;
