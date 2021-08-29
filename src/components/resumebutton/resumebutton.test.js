import React from "react";
import ReactDOM from "react-dom";
import ResumeButton from "./resumebutton";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders the button", () => {
  const divbutton = document.createElement("div");
  ReactDOM.render(<ResumeButton />, divbutton);
});

it("Displays text as expected", () => {
  const { getByTestId } = render(<ResumeButton text="Resume" />);
  expect(getByTestId("button").textContent).toBe("Resume");
});

it("Displays text as expected 2", () => {
  const { getByTestId } = render(<ResumeButton text="Get Resume" />);
  expect(getByTestId("button").textContent).toBe("Get Resume");
});

// Can do snapshot testing but dont know why to do it. Doing it is easy but why?
