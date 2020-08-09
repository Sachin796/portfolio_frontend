import React, { Component } from "react";
import swal from "sweetalert";
import Captcha from "./captcha";
import API from "../../utils/index";
import Button from "./button";
import Input from "./input";
import Details from "./details";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      comment: "",
      captchaVerified: false,
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }

  recaptchaLoaded = () => {
    console.log("Recaptcha loaded");
  };

  verifyCallback = () => {
    this.setState({
      captchaVerified: true,
    });
  };

  updateStateData = (event) => {
    event.preventDefault();
    if (event.target.id === "email") {
      this.setState({
        email: event.target.value,
      });
    } else if (event.target.id === "username") {
      this.setState({
        name: event.target.value,
      });
    } else if (event.target.id === "comment") {
      this.setState({
        comment: event.target.value,
      });
    }
  };

  clearFields() {
    this.setState({
      email: "",
      name: "",
      comment: "",
      captchaVerified: false,
    });
    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("email").value = "";
  }

  sendEmail = async (event) => {
    event.preventDefault();
    if (
      this.state.comment != "" &&
      this.state.email != "" &&
      this.state.name != ""
    ) {
      if (this.state.captchaVerified) {
        const response = await API.sendEmail(this.state);
        if (response.status === 200) {
          swal("Thanks!", "Mail sent sucessfully !", "success");
          this.clearFields();
        } else {
          swal(
            "Oops!",
            "Error with service... Please refresh the page.",
            "error"
          );
        }
      } else {
        swal("Oops!", "Please complete the captcha to proceed", "warning");
      }
    } else {
      swal("Empty Input!", "Please fill all details", "error");
      this.clearFields();
    }
  };

  render() {
    return (
      <>
        <div
          className="row center"
          id="contactMeContainer"
          style={{
            backgroundColor: "rgb(151, 151, 151,0.3)",
            display: "flex",
            height: "60vh",
          }}
        >
          <div className="col l6 m6 s12">
            <div className="col l12 m12 s12" style={{ height: "auto" }}>
              <h4
                id="justcolor"
                className="center"
                style={{ paddingTop: "25px" }}
              >
                Contact
              </h4>
              <hr style={{ width: "7%", marginBottom: "15px" }}></hr>
            </div>
            <Details
              classname="col l12 m12 s12"
              text="Email"
              link="#"
              link_text="sachinjaveri.2010@gmail.com"
            />
            <div className="col l12 m12 s12 ">
              <p>Phone</p>
              <p>416-836-3359</p>
            </div>
            <Details
              classname="col l12 m12 s12"
              text="LinkedIn"
              link="https://www.linkedin.com/in/sachin-javeri-42436280"
              link_text="https://www.linkedin.com/in/sachin-javeri-42436280"
            />
          </div>
          <div className="col l6 m6 s12">
            <div className="col l1 m1"></div>
            <div className="col l8 m8 s12">
              <form method="POST" style={{ marginTop: "50px" }}>
                <Input
                  keyup={this.updateStateData}
                  text="Name"
                  type="text"
                  id="username"
                  placeholder="Name"
                  classname="form-control"
                />
                <Input
                  keyup={this.updateStateData}
                  text="Email Address"
                  type="email"
                  id="email"
                  placeholder="Email"
                  classname="validate"
                />
                <Input
                  keyup={this.updateStateData}
                  text="Comments"
                  type="text"
                  id="comment"
                  placeholder="Comments"
                  classname="form-control"
                />
                <div style={{ margin: "3.5vh 20%" }}>
                  <Captcha
                    recaptchaLoaded={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}
                  />
                </div>
                <Button
                  onclickevent={(e) => {
                    this.sendEmail(e);
                  }}
                  text="Submit"
                  id="submitemail"
                  type="submit"
                />
              </form>
            </div>
            <div className="col l1 m1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
