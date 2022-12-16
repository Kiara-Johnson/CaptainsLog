import React, { Component } from "react";

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Log</h1>
        <form action="/logs" methods="POST"></form>
      </div>
    );
  }
}
