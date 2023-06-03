import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  
  
  const [tasks, setTask] = useState(TASKS)
  const [categories, setCategory] = useState("All")
 
  const filteredTasks = tasks.filter(
    t => categories === "All" || t.category === categories
    )
  
  function handleDelete(input){
    setTask(tasks.filter((task) => task.text !== input))
  }

  function onTaskFormSubmit(newTask){
    setTask([...tasks, newTask])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={categories} categories={CATEGORIES} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(c => c !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList task={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
