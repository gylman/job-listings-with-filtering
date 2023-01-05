import React, { useState } from "react";

function TagItem({ children, setSelectedTags, tag }) {
  function handleSelect(tag) {
    setSelectedTags((state) => {
      if (state.includes(tag)) {
        const newTags = state.filter((tagItem) => tagItem !== tag);
        return newTags;
      } else {
        return [...state, tag];
      }
    });
  }

  return (
    <button
      className="tag-item"
      onClick={() => {
        handleSelect(tag);
      }}
    >
      {children}
    </button>
  );
}

export default TagItem;
