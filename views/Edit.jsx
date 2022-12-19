import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <form action={`/logs/${logs._id}?_method=PUT`} method='post'>
            <h1>Edit {logs.title}</h1>
            Title: <input type="text" name="title" defaultValue={logs.title} /><br />
            Entry: <input type="text" name="entry"  defaultValue={logs.entry}/><br />
            <input type="submit" name="" value="Submit Change"/>
        </form>
      </div>
    )
  }
}