import React from "react"
import Card from "../assets/logo.png"
import {  useNavigate } from "react-router-dom"

const Homepage =()=>{ 
    const navigate=useNavigate()
    const handleLogout = ()=>{
        window.localStorage.removeItem("jwtToken")
        navigate("/")
    } 
    return(
        <div>
            <h1 style={{fontFamily:"Roboto",fontSize:"25px",textAlign:"center",color:"blueviolet"}}>Welcome to PayInstaCard</h1>
            <img src={Card} alt="img" style={{width:"200px",height:"200px",marginLeft:"500px",marginTop:"20px"}}/>
            <button style={{ position:"absolute",top:"20px",left:"1000px",width: "136px",height: "45px",border: "none",borderRadius:"20px", background: "hsla(0, 100%, 73%, 1)", color: "white",fontFamily: "Roboto", fontSize: "18px", fontWeight: "700",textAlign: "center",}} onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Homepage