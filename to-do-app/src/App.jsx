import React, { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const tragetName = event.target.name;
    const targetValue = tragetName === "completed" ? event.target.checked : event.target. value
    setFormState({
      ...formState,
      [tragetName ] : targetValue
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([...tasks, formState])
    setFormState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
    })
  }
  function handleDelete(index){
    let updatedArray  = [...tasks]
    updatedArray.splice(index,1)
    setTasks(updatedArray)
  }
function handleToggle(index){
  let updatedArray = [...tasks]
  updatedArray[index].completed = !updatedArray[index].completed
  setTasks(updatedArray)
}
  return (
    <>
      <h1>To-Do-List</h1>
      <div id ="head">
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} checked={formState.completed} />
          </label>
          <select name="taskAssignedTo" onChange={handleChange} value={formState.taskAssignedTo}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit" >Add Task</button>
        </form>
      </div>
      {tasks.map((item, index) => (
        <TaskItem key={index} 
        item={item} 
        handleDelete = {() => handleDelete(index)} 
        handleToggle = {() => handleToggle(index)}/>
      ))}
    </>
  );
}

export default App;