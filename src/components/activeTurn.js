import React from "react";

const ActiveTurn = (props) => {
  return (
    <h2>
      Turn: <span className="badge badge-secondary">{props.turn}</span>
    </h2>
  );
};

export default ActiveTurn;
