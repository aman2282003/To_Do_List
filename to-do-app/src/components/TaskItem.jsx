import "../App.css";
function TaskItem({item,handleDelete, handleToggle}) {
  return <div id = "main">
  <span id = "task" style ={{color : item.completed ? "green" : "red",}}><h2>{item.task} {} </h2></span>
  <span><button onClick={handleToggle}> {item.completed ? "Yes" : "No"}</button></span>
  <span>{item.taskAssignedTo}</span>
  <span><button onClick = {handleDelete}>Delete</button></span>
  </div>;

}

export default TaskItem;