import React from 'react';

function TaskList({ tasks, onDelete }) {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100vw"}}>
      <h2 style={{color:"#7209b7",fontSize:"25px",fontFamily:"Roboto",fontWeight:"500",marginLeft:"20px",textAlign:"center",marginTop:"20px"}}>Task List</h2>
      <ul style={{display:"flex",flexWrap:"wrap",gap:"20px",marginLeft:"20px"}}>
        {tasks.map((task) => (
          <li key={task.id} style={{display:"flex",flexDirection:"column",height:"200px",width:"400px",backgroundColor:"#7b2cbf",justifyContent:"center",alignItems:"left",gap:"10px",borderRadius:"10px"}}>
            <strong style={{color:"white",fontSize:"20px",fontFamily:"Roboto",fontWeight:"500",backgroundColor:"#cdb4db",border:"none",borderRadius:"10px",height:"30px",width:"250px",paddingLeft:"10px",marginLeft:"10px"}}>{task.title}</strong>
            <p style={{color:"white",fontSize:"20px",fontFamily:"Roboto",fontWeight:"500",backgroundColor:"#cdb4db",height:"50px",width:"300px",borderRadius:"10px",paddingLeft:"10px",marginLeft:"10px"}} >{task.description}</p>
            <button onClick={() => onDelete(task.id)} style={{height:"30px",width:"100px",border:"none",borderRadius:"10px",backgroundColor:"#c8b6ff",color:"#023047",textAlign:"center",fontSize:"20px",fontFamily:"Roboto",marginLeft:"10px"}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;



