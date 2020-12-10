import React from "react";

const Winner = (props) => {
  return (
    <h2>
      Winner: <span className="badge badge-primary">{props.winner}</span>
    </h2>
  );
};

export default Winner;
