import React from "react";

//9934012129 - pick up patna

const LeftCol = (props) => {
  // onChange = {(e) => props.setTask(function () {return ({ ...props.task, title: e.target.value })})}

  return (
    <div>
      <form action="#" id="myForm">
        <div className="form-group">
          <label htmlFor="formDescription">Name</label>
          <input type="text" name="" id="formTitle" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="formDescription">Description</label>
          <textarea
            className="form-control"
            name=""
            id="formDescription"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            let title = document.getElementById("formTitle").value;
            let description = document.getElementById("formDescription").value;
            let newList = [
              ...props.list,
              { title: title, description: description },
            ];
            props.setList(() => newList);
            console.log(props.list);
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default LeftCol;
