import React from "react";

function TopRow({ company, newTag, featured }) {
  const classNameNew = newTag ? "new" : "hidden";
  const classNameFeatured = featured ? "featured" : "hidden";
  return (
    <div className="top-row">
      <span className="company">{company}</span>
      <div className="secondary-tags-container">
        <p className={classNameNew}>
          <span>new!</span>
        </p>
        <p className={classNameFeatured}>
          <span>featured</span>
        </p>
      </div>
    </div>
  );
}

export default TopRow;
