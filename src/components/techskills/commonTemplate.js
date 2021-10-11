import React from "react";
import TechTemplate from "../technologiesTemplate";

const CommonTemplate = (props) => {
  return (
    <div
      className="col l12 m12 s12"
      style={{height: "auto", marginTop: `${props.marginTop}`}}
    >
      <fig className={props.classname}></fig>
      {props.imgType.map((imagesName, index) => {
        return (
          <TechTemplate
            id={imagesName}
            className="col l2 m12 s12"
            src={imagesName}
            figcaption={props.figcaptionType[index]}
          ></TechTemplate>
        );
      })}
      <fig className="col l4 m12 s12"></fig>
    </div>
  );
};

export default CommonTemplate;
