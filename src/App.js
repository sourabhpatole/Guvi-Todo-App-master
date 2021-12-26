import React, { useState } from "react";

import "./App.css";
import LeftCol from "./left-col/left-col";
import MiddleCol from "./middle-col/middle-col";
import RightCol from "./right-col/right-col";

function App() {
  const [task, setTask] = useState({ title: "", description: "" });
  const [list, setList] = useState([]);
  const [DisplayItem, setDisplayItem] = useState({});

  // const handleClick = () => { }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <LeftCol
              setTask={setTask}
              task={task}
              list={list}
              setList={setList}
            ></LeftCol>
          </div>
          <div className="col-lg-4">
            <MiddleCol
              list={list}
              DisplayItem={DisplayItem}
              setDisplayItem={setDisplayItem}
            ></MiddleCol>
          </div>
          <div className="col-lg-4">
            <RightCol DisplayItem={DisplayItem}></RightCol>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
