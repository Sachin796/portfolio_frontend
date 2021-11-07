import React from "react";
import {Input} from "../../src/components/contact/input";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

let prop = {
  text: "Test Input Text",
};

let component;
beforeEach(() => {
  component = shallow(<Input {...prop} />);
});

describe("Testing Input Component", () => {
  let expectedObj = {}
  it("Should display proper text", () => {
    expect(component.find(".form-group").children().at(0).text()).toEqual(
      "Test Input Text"
    );
  });

  it("Should display non-empty text", () => {
    expect(component.find(".form-group").children().at(0).text()).not.toBe("");
  });

  it("Should have onKeyUp Working", () => {
    const mountedcomponent = mount(<Input />);
    const inputElement = mountedcomponent.find("input");
    inputElement.instance().value = "Input test text";
    // inputElement.simulate("change");
    expect(inputElement.instance().value).toEqual("Input test text");
  });
});
