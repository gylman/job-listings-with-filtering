import React from "react";

function MidRow({ featured, position }) {
  return (
    <div className="mid-row">
      <span className={position}>{position}</span>
    </div>
  );
}

export default MidRow;
