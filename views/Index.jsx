import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Log Entries</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {this.props.logs?.map((log, i) => {
            console.log(this.props.logs.map);
            return (
              <li>
                The <a href={`/logs/${log.id}`}> {log.title} </a> is {log.entry}
                {log.shipIsBroken
                  ? `The ship is broken`
                  : `The ship is not broken`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
