import React from "react";
import Task from "./Task"; 

function TaskList({ task, handleDelete }) {
  const list = task.map((item) => {
    return <Task  key={item.text} category={item.category} text={item.text} handleDelete={handleDelete}/>
})
   
  return (
    <div className="tasks">
      {list}
    </div>
  );

  }
export default TaskList;
