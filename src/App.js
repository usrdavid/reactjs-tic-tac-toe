import React, { Component } from "react";
import Table from "./components/table";
import ActiveTurn from "./components/activeTurn";
import Winner from "./components/winner";
import CheckResult from "./logic/checkResult";

class App extends Component {
  state = this.initialState;

  get initialState() {
    return {
      turn: "X",
      winner: "",
      boxes: [
        { key: 0, value: 8, symbol: "", used: false },
        { key: 1, value: 1, symbol: "", used: false },
        { key: 2, value: 6, symbol: "", used: false },
        { key: 3, value: 3, symbol: "", used: false },
        { key: 4, value: 5, symbol: "", used: false },
        { key: 5, value: 7, symbol: "", used: false },
        { key: 6, value: 4, symbol: "", used: false },
        { key: 7, value: 9, symbol: "", used: false },
        { key: 8, value: 2, symbol: "", used: false },
      ],
    };
  }

  resetState = () => this.setState(this.initialState);

  handleClickOnBox = (box) => {
    const { turn, boxes } = this.state;
    const newBoxes = [...boxes];
    let newTurn = turn;
    const index = newBoxes.indexOf(box);

    if (!newBoxes[index].used) {
      newBoxes[index].symbol = turn;
      newBoxes[index].used = !newBoxes[index].used;
      newTurn = turn === "X" ? "O" : "X";
    }

    const check = new CheckResult(turn, newBoxes);
    const newWinner = check.checkResult();

    this.setState({ turn: newTurn, winner: newWinner, boxes: newBoxes });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center font-weight-bold m-5">Tic tac toe</h1>
        <div className="d-flex">
          <div className="container m-auto">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6">
                <Table
                  state={this.state}
                  onBoxClick={this.handleClickOnBox}
                  winner={this.state.winner}
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 d-flex">
                <div className="m-auto">
                  <ActiveTurn turn={this.state.turn} />
                  <Winner winner={this.state.winner} />
                  <button className="btn btn-success" onClick={this.resetState}>
                    New game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
