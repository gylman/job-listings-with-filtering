import React from "react";
import Description from "./Description";
import TagRow from "./TagRow";

function JobItem(props) {
  const jobItemClass = props.featured
    ? "job-item--higlighted job-item"
    : "job-item";
  return (
    <div className={jobItemClass}>
      <Description
        logo={props.logo}
        company={props.company}
        newTag={props.new}
        feature={props.featured}
        position={props.position}
        postedAt={props.postedAt}
        contract={props.contract}
        location={props.location}
      />
      <TagRow
        setSelectedTags={props.setSelectedTags}
        role={props.role}
        level={props.level}
        languages={props.languages}
        tools={props.tools}
      />
    </div>
  );
}

export default JobItem;
