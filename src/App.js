// App.js
import React from 'react';
import './App.css';
import TaskList from './Components/Task';
import TaskForm from './Components/TaskForm';
import useTaskApi from './Components/APICALL';

function App() {
  const { tasks, isLoading, addTask, deleteTask } = useTaskApi();

  const handleAddTask = (task) => {
    addTask(task);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div style={{height:"100vh",width:"100%",margin:"0",backgroundColor:"",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1 style={{textAlign:"center",fontSize:"30px",fontFamily:"Roboto",fontWeight:"500",color:"#283618",paddingTop:"30px"}}>To-Do List App</h1>
      <TaskForm onAdd={handleAddTask} />
      {isLoading ? <p style={{}}>Loading...</p> : <TaskList tasks={tasks} onDelete={handleDeleteTask} />}
    </div>
  );
}

export default App;



