import React from "react";

const TechTemplate = ({className, src, figcaption}) => {
  return (
    <fig className={className}>
      <img
        src={src}
        style={{marginLeft: "30px"}}
        className="icondimensions"
        alt="technologies"
      />
      <figcaption>{figcaption}</figcaption>
    </fig>
  );
};

export default TechTemplate;
