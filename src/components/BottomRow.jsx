import React from "react";

function BottomRow({ postedAt, contract, location }) {
  return (
    <div className="bottom-row">
      <span>{postedAt}</span>
      <span className="contract">{contract}</span>
      <span className="location">{location}</span>
    </div>
  );
}

export default BottomRow;
