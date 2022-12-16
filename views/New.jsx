import React, { Component } from "react";

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Log</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          <br />
          Entry: <input type="textarea" name="entry" />
          <br />
          Ship is broken: <input type="checkbox" name="shipIsBroken" value="true" />
          <br />
          <input type="submit" name="" value="Create Entry" />
        </form>
      </div>
    );
  }
}
