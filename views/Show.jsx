const React = require("react");
class Show extends React.Component {
  render() {
    const logs = this.props.logs;
    return (
      <div>
        <h1> {logs.title} </h1>
        <p>{logs.entry}.</p>
        {logs.shipIsBroken ? "The ship is broken" : "The ship is not broken"}
        <a href="/logs">Back to Logs</a>
      </div>
    );
  }
}
module.exports = Show;
