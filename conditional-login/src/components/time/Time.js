import React, { useState } from "react";
import './style.css';

const Time = () => {

  //setInterval function will call updateTime fun at every 1000 mili sec
  setInterval(updateTime,1000);

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
      <h1>Current Time</h1>
      <button onClick={updateTime} className="btn-time">{time}</button>
    </div>
    
    </div>

    
  )
}

export default Time