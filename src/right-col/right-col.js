import React from "react";

const RightCol = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <h3>Title</h3>
        {props.DisplayItem.title}
        <br />
        <h3>Description</h3>
        {props.DisplayItem.description}
      </div>
    </div>
  );
};

export default RightCol;
