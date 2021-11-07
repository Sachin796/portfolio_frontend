import React, {useEffect, useState} from "react";
import TechTemplate from "../technologiesTemplate/index";
import API from "../../utils/index";

export const BackEnd = () => {
  const [state, setState] = useState({data: undefined});

  useEffect(() => {
    API.getBackEndSkills().then((data) => {
      console.log(data);
      setState({data});
    });
  });

  return (
    <>
      <>
        {state.data
          ? state.data.map((data) => {
              return (
                <TechTemplate
                  id={data.caption}
                  className="col l2 m12 s12"
                  src={data.link}
                  figcaption={data.caption}
                ></TechTemplate>
              );
            })
          : null}
      </>
    </>
  );
};
