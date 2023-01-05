import React, { useEffect } from "react";

function Filter({ setSelectedTags, children }) {
  function handleFilterRemove() {
    setSelectedTags((prevState) => {
      const newTags = prevState.filter((tag) => tag !== children);
      return newTags;
    });
  }
  return (
    <div className="filter">
      <div className="filter-description">{children}</div>
      <button className="filter-remove-button" onClick={handleFilterRemove}>
        <img
          className="x-button-img"
          src={`${process.env.PUBLIC_URL}` + `/images/combined-shape.svg`}
          alt="x-button"
        />
      </button>
    </div>
  );
}

export default Filter;
