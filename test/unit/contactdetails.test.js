import React from "react";
import {Details} from "../../src/components/contact/details";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

let prop = {
  classname: "dummyClass",
  text: "dummy text",
  link: "http://example.com",
  link_text: "Dummy Link Text",
};

let component;
beforeEach(() => {
  component = shallow(<Details {...prop} />);
});

describe("Test Contact Details Component", () => {
  it("Should Render Correct Paragraph Text", () => {
    let expectedText = "dummy text";
    expect(component.find(".dummyClass").children().first().text()).toEqual(
      expectedText
    );
  });

  it("Should Not Render Empty Paragraph Text", () => {
    let expectedText = "";
    expect(component.find(".dummyClass").children().first().text()).not.toBe(
      expectedText
    );
  });

  it("Should Render Correct Link Text", () => {
    let expectedText = "Dummy Link Text";
    expect(
      component.find(".dummyClass").children().at(1).children().text()
    ).toEqual(expectedText);
  });

  it("Should Not Render Empty Link Text", () => {
    let expectedText = "";
    expect(
      component.find(".dummyClass").children().at(1).children().text()
    ).not.toBe(expectedText);
  });

  it("Should Test the Href Prop of <a /> tag", () => {
    let expectedText = "http://example.com";
    expect(
      component.find(".dummyClass").children().at(1).children().props().href
    ).toEqual(expectedText);
  });

  //   it("Should click the a tag only once", () => {
  //     component.find(".dummyClass").children().at(1).children().simulate("click");
  //     expect(
  //       component.find(".dummyClass").children().at(1).children()
  //     ).toHaveBeenCalledTimes(1);
  //   });
});
