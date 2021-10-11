import React from "react";
import {ResumeButton} from "../../src/components/resumebutton/resumebutton";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

const propData = {};

let component;
const mockFunction = jest.fn();
beforeEach(() => {
  component = shallow(
    <ResumeButton text="Testing Text" onClick={mockFunction} />
  );
});

describe.skip("Button Component Unit Testing", () => {
  it("Button has proper Text", () => {
    expect(component.find("#resumebtn").text()).toEqual("Testing Text");
  });

  it("Button has proper Clickable Functionality", () => {
    console.log(component.find("#resumebtn"));

    // .simulate("click");
    // expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
