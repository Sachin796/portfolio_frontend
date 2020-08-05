import React from "react";

function TechTemplate({ className, src, figcaption }) {
  return (
    <fig className={className}>
      <img
        src={src}
        style={{ marginLeft: "30px" }}
        className="icondimensions"
      />
      <figcaption>{figcaption}</figcaption>
    </fig>
  );
}

export default TechTemplate;
