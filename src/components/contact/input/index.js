import React from "react";

const Input = (props) => (
  <div className="form-group">
    <label class="sr-only" for={props.id}>
      {props.text}
    </label>
    <input
      type={props.type}
      class={props.classname}
      id={props.id}
      onKeyUp={props.keyup}
      placeholder={props.placeholder}
    />
    <span
      class="helper-text"
      data-error="Please enter a valid email address"
      data-success="Perfect !"
    ></span>
  </div>
);

export default Input;
