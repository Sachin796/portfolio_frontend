import React, { Component } from "react";
import TechTemplate from "../technologiesTemplate/index";
import API from "../../utils/index";
class FrontEnd extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    API.getFrontEndSkills().then((data) => this.setState({ data }));
  }

  render() {
    return (
      <>
        <h3>FrontEnd Component</h3>
        {this.state.data
          ? this.state.data.map((data) => {
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
    );
  }
}

export default FrontEnd;
