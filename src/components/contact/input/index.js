import React from "react";

const Input = (props) => (
  <div className="form-group">
    <label class="sr-only" for={props.id}>
      {props.text}
    </label>
    <input
      type={props.type}
      class="form-control"
      id={props.id}
      onKeyUp={props.keyup}
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;
