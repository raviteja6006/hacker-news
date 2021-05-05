import React from "react";

const Story = ({ story: { id, by, title, kids, time } }) => {
  return (
    <div className="story">
      <div className="story-title">
        <h2>{title}</h2>
      </div>
      <div className="story-info">
        <p>Created by: {by}</p>
        <p>
          Created At:
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p>{`${kids && kids.length > 0 ? kids.length : 0} comments`}</p>
      </div>
    </div>
  );
};

export default Story;
