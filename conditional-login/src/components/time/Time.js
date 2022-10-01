import React, { useState } from "react";
import './style.css';

const Time = () => {


  const now = new Date().toLocaleTimeString();

  const [time , setTime ] = useState(now);

  function updateTime() {
    const newTime =  new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div>
    <h1 className="welcome-heading">Welcome</h1>

    <div className="time-div">
      <h1>{now}</h1>
      <button onClick={updateTime} className="btn-time">Update Time</button>
    </div>
    
    </div>

    
  )
}

export default Time