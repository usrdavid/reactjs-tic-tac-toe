function CheckResult(turn, boxes) {
  this.turn = turn;
  this.boxes = boxes;

  this.checkResult = () => {
    const winner =
      checkRows() || checkCols() || checkDiag1() || checkDiag2() || "";
    return winner;
  };

  let checkRows = () => {
    let sumBoxes;
    let k = 0;
    for (let i = 0; i < 3; i++) {
      sumBoxes = 0;
      for (let j = 0; j < 3; j++) {
        if (this.boxes[k].symbol === this.turn) {
          sumBoxes += this.boxes[k].value;
        }
        k++;
      }
      if (sumBoxes === 15) {
        return this.turn;
      }
    }
    return "";
  };

  let checkCols = () => {
    let sumBoxes;
    let k = 0;
    for (let i = 0; i < 3; i++) {
      sumBoxes = 0;
      for (let j = 0; j < 3; j++) {
        if (this.boxes[k].symbol === this.turn) {
          sumBoxes += this.boxes[k].value;
        }
        k = k + 3 < 9 ? k + 3 : k;
      }
      if (sumBoxes === 15) {
        return this.turn;
      }
      k -= 5;
    }
    return "";
  };

  let checkDiag1 = () => {
    let sumBoxes = 0;
    let k = 0;
    for (let i = 0; i < 3; i++) {
      if (this.boxes[k].symbol === this.turn) {
        sumBoxes += this.boxes[k].value;
      }
      k = k + 4 < 9 ? k + 4 : k;
    }
    if (sumBoxes === 15) {
      return this.turn;
    }
    return "";
  };

  let checkDiag2 = () => {
    let sumBoxes = 0;
    let k = 2;
    for (let i = 0; i < 3; i++) {
      if (this.boxes[k].symbol === this.turn) {
        sumBoxes += this.boxes[k].value;
      }
      k = k + 2 < 9 ? k + 2 : k;
    }
    if (sumBoxes === 15) {
      return this.turn;
    }
    return "";
  };
}

export default CheckResult;
