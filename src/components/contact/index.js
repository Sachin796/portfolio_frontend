import React, { Component } from "react";
import API from "../../utils/index";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
    this.sendEmail = this.sendEmail.bind(this);
  }

  updateStateData = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };

  sendEmail = async (event) => {
    event.preventDefault();
    const response = await API.sendEmail(this.state);
    if (response.status === 200) {
      alert("Thank you for the email");
      console.log((document.getElementById("email").value = ""));
    } else {
      alert("Error");
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
            <div style={{ height: "auto" }}>
              <h4
                id="justcolor"
                className="center"
                style={{ paddingTop: "25px" }}
              >
                Contact
              </h4>
              <hr style={{ width: "7%", marginBottom: "15px" }}></hr>
            </div>

            <div className="col l12 m12 s12 ">
              <p>Email</p>
              <p>
                <a href="#">sachinjaveri.2010@gmail.com</a>
              </p>
            </div>

            {/* Contact */}
            <div className="col l12 m12 s12 ">
              <p>Phone</p>
              <p>416-836-3359</p>
            </div>

            {/* Linkedln */}
            <div className="col l12 m12 s12 ">
              <p>Linkedln</p>
              <p>
                <a href="https://www.linkedin.com/in/sachin-javeri-42436280">
                  https://www.linkedin.com/in/sachin-javeri-42436280
                </a>
              </p>
            </div>
          </div>
          <div className="col l6 m6 s12">
            <form method="POST">
              <div className="form-group">
                <label class="sr-only" for="email">
                  Email address:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  onKeyUp={this.updateStateData}
                />
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  this.sendEmail(e);
                }}
                target="_blank"
                class="btn btn-default"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
