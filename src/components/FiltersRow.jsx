import cuid from "cuid";
import React from "react";
import Filter from "./Filter";

function FiltersRow(props) {
  function handleClear() {
    props.setSelectedTags(() => []);
  }
  return (
    <div className="filters-row-button-container">
      <div className="filters-row">
        {props.selectedTags.map((filter) => (
          <Filter key={cuid()} setSelectedTags={props.setSelectedTags}>
            {filter}
          </Filter>
        ))}
      </div>
      <button className="clear-button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default FiltersRow;
