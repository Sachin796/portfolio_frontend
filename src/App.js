import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/index.js";
// import ReactGA from "react-ga";
// require("dotenv").config();

class App extends Component {
  render() {
    return <MainPage></MainPage>;
  }
}

export default App;
