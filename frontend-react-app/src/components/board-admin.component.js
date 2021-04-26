import React, { Component } from "react";

import UserService from "../services/user.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "Admin Content"
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <h4>Demo Admin data</h4>
        </header>
      </div>
    );
  }
}