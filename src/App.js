import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Title from "./components/Title";
import PersonalInfo from "./components/PersonalInfo";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        info: {
          fullname: "",
          email: "",
          email2: "",
          address: "",
          phone: "",
          country: "",
          state: "",
          city: "",
          zipcode: "",
          notice: ""
        },
        userClick: {
          fullname: false,
          email: false,
          email2: false,
          address: false,
          phone: false,
          country: false,
          state: false,
          city: false,
          zipcode: false,
          notice: false
        }
      },
      skill: {
        selected_option: "option_1",
        discipline: {
          discipline_1: false,
          discipline_2: false,
          discipline_3: false,
          discipline_4: false
        },
        location: {
          Vietnam: false,
          Thailand: false,
          Singapore: false,
          Malaysia: false
        }
      },
      portfolio: {
        url: "",
        otherInfo: ""
      },
      current_page: 1
    };
  }

  handleSubmit = (name, data) => {
    this.setState({
      [name]: data
    });
  };

  handlePaging = num => {
    this.setState({
      current_page: num
    });
  };

  render() {
    const { personalInfo, skill, portfolio, current_page } = this.state;
    return (
      <Router>
        <div className="wrapper">
          <div className="content">
            <Route
              path="/form-router-validation/"
              render={() => <NavBar current_page={current_page} />}
            />
            <Route path="/form-router-validation/" component={Title} />
            <Route
              path="/form-router-validation/"
              exact={true}
              render={() => (
                <PersonalInfo
                  data={personalInfo}
                  handleSubmit={this.handleSubmit}
                  handlePaging={this.handlePaging}
                />
              )}
            />
            <Route
              path="/form-router-validation/part2"
              render={() => (
                <Skill
                  data={skill}
                  handleSubmit={this.handleSubmit}
                  handlePaging={this.handlePaging}
                />
              )}
            />
            <Route
              path="/form-router-validation/part3"
              render={() => (
                <Portfolio
                  data={portfolio}
                  handleSubmit={this.handleSubmit}
                  handlePaging={this.handlePaging}
                />
              )}
            />
            <Route
              path="/summary"
              render={() => (
                <Summary
                  personalInfo={personalInfo.info}
                  location={skill.location}
                  url={portfolio.url}
                />
              )}
            />
          </div>
          <Route path="/form-router-validation/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
