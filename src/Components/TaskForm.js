// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <div style={{backgroundColor:"#d9ed92",display:"flex",flexDirection:"column",height:"200px",width:"500px",alignItems:"left",marginTop:"30px",borderRadius:"10px"}}>
      <h2 style={{color:"#22577a",fontSize:"25px",fontFamily:"Roboto",fontWeight:"500",marginLeft:"20px",textAlign:"center",marginTop:"20px"}}>Add Task</h2>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder='Enter the title here' style={{height:"30px",width:"300px",border:"1px solid",borderRadius:"10px",marginLeft:"100px",textAlign:"center",marginTop:"20px"}}
          />
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder='Enter the description here' style={{height:"30px",width:"300px",border:"1px solid",borderRadius:"10px",marginLeft:"100px",textAlign:"center",marginTop:"20px"}}
          />
        <button type="submit" style={{marginLeft:"210px",textAlign:"center",marginTop:"10px",height:"30px",width:"100px",border:"none",borderRadius:"10px",backgroundColor:"#84a98c",color:"#22577a",fontSize:"20px",fontFamily:"Roboto",fontWeight:"500"}}>Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;



