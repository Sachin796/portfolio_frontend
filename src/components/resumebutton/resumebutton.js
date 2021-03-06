import React from "react";
import API from "../../utils/index";

function ResumeButton(props) {
  return (
    <div style={{ marginTop: "25px" }}>
      <button
        type="submit"
        onClick={() => {
          API.getResume();
        }}
        target="_blank"
        rel="noopener noreferrer"
        id="resumebtn"
        data-testid="button"
      >
        {props.text}
      </button>
    </div>
  );
}

export default ResumeButton;
