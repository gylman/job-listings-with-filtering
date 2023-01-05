import React, { useState } from "react";
import TagItem from "./TagItem";
import cuid from "cuid";

function TagRow(props) {
  const tags = [props.role, props.level, ...props.languages, ...props.tools];
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <TagItem key={cuid()} tag={tag} setSelectedTags={props.setSelectedTags}>
          {tag}
        </TagItem>
      ))}
    </div>
  );
}

export default TagRow;
