import React, { useState } from "react";
import './style.css';

const Time = () => {

  //setInterval function will call updateTime fun at every 1000 mili sec
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  const [isBackground, setBackGroud] = useState(false)

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  function buttonBackGroundOver() {
    setBackGroud(true);
  }
  function buttonBackGroundOut() {
    setBackGroud(false);
  }
  return (
    <div>
      <h1 className="welcome-heading">Welcome</h1>

      <div className="time-div">
        <h1>Current Time</h1>
        <button
          style={{ backgroundColor: isBackground ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255, 0.853)" }}
          onClick={updateTime}
          className="btn-time"
          onMouseOver={buttonBackGroundOver}
          onMouseOut={buttonBackGroundOut}
        >
          {time}
        </button>
      </div>

    </div>


  )
}

export default Time