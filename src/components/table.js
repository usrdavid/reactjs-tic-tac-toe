import React, { Component } from "react";
import Box from "./box";

class Table extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-3">
          {this.props.state.boxes.map((box) => (
            <Box
              key={box.key}
              box={box}
              onBoxClick={this.props.onBoxClick}
              winner={this.props.winner}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
