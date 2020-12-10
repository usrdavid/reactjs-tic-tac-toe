import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="col bg-light border d-flex" style={{ height: "100px" }}>
        <button
          className="btn btn-light"
          style={{ width: "100%" }}
          onClick={() => this.props.onBoxClick(this.props.box)}
          disabled={this.props.winner !== "" ? true : false}
        >
          <span className="m-auto">{this.props.box.symbol}</span>
        </button>
      </div>
    );
  }
}

export default Box;
