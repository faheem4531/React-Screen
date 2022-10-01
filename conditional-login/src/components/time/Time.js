import React from "react";
import './style.css';

const Time = () => {


  const now = new Date().toLocaleDateString();


  return (
    <div>
    <h1 className="welcome-heading">Welcome</h1>

    <div className="time-div">
      <h1>Time</h1>
      <button className="btn-time">Time</button>
    </div>
    
    </div>

    
  )
}

export default Time