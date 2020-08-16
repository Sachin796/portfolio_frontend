import React, { Component } from "react";
import NavItems from "../components/nav";
import Intro from "../components/intro";
import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Techskills from "../components/techskills";
import ReactGA from "react-ga";
require("dotenv").config();

export const initializeReactGA = () => {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_KEYS);
  ReactGA.pageview("./index.js");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

class MainPage extends Component {
  componentDidMount() {
    initializeReactGA();
    logPageView();
  }

  render() {
    return (
      <>
        <Router>
          <NavItems></NavItems>
          <Intro></Intro>
          <AboutMe></AboutMe>
          <Techskills></Techskills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </Router>
      </>
    );
  }
}

export default MainPage;
