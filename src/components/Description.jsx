import React from "react";
import BottomRow from "./BottomRow";
import MidRow from "./MidRow";
import TopRow from "./TopRow";

function Description(props) {
  return (
    <div className="description">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + props.logo}
        alt={props.company}
      />
      <div className="info">
        <TopRow
          logo={props.logo}
          company={props.company}
          newTag={props.new}
          feature={props.featured}
        />
        <MidRow position={props.position} />
        <BottomRow
          postedAt={props.postedAt}
          contract={props.contract}
          location={props.location}
        />
      </div>
    </div>
  );
}

export default Description;
