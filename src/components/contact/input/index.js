import React from "react";

export const Input = (props) => (
  <div className="form-group">
    <label className="sr-only" htmlFor={props.id}>
      {props.text}
    </label>
    <input
      type={props.type}
      className={props.classname}
      id={props.id}
      onKeyUp={props.keyup}
      placeholder={props.placeholder}
    />
    <span
      className="helper-text"
      data-error="Please enter a valid email address"
      data-success="Perfect !"
    ></span>
  </div>
);
