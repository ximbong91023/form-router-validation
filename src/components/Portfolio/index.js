import React, { Component } from "react";

import "./index.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.data.url || "",
      otherInfo: props.data.otherInfo || ""
    };
  }

  handleChange = event => {
    const newState = { ...this.state, [event.target.id]: event.target.value };

    this.setState(newState);
    this.props.handleSubmit("portfolio", newState);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const url = this.state.url;
    // eslint-disable-next-line
    const formValidity = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      url
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sectionTitle">3. Portfolio</div>
        <div className="questions">
          Prove you're IBM's next great designer by showing us who you are. What
          you've done. How you think. Tell us your story.
        </div>
        <input
          placeholder="Portfolio link*"
          onChange={this.handleChange}
          value={this.state.url}
          id="url"
        />
        <textarea
          placeholder="Anything else"
          onChange={this.handleChange}
          value={this.state.otherInfo}
          id="otherInfo"
        />
        <button className="submitButton" disabled={!formValidity}>
          <span>Submit</span>
        </button>
      </form>
    );
  }
}

export default Portfolio;
