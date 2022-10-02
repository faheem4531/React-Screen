import React, { useState } from "react";
import './style.css';

const Time = () => {

  //setInterval function will call updateTime fun at every 1000 mili sec
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();


  //hooks 
  const [time, setTime] = useState(now);
  const [isBackground, setBackGroud] = useState(false);
  const [name, setName]= useState("");
  const [heading, setHeading]= useState("");


  //functions
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

  function handleGreeting (event) {
    setName(event.target.value);
  }

  function handleSubmit () {
setHeading(name);
  }

  return (
    <div>
      <h1 
      className="welcome-heading">Hi {heading}</h1>
      <input 
      onChange={handleGreeting}
      className="name-input"
      type="text"
      placeholder="Enter Your name"
      />
      <button 
      onClick={handleSubmit}
      className="btn-submit"
      >Submit</button>

      <div className="time-div">
        <button
          style={{ backgroundColor: isBackground ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255, 0.853)" }}
          onClick={updateTime}
          className="btn-time"
          onMouseOver={buttonBackGroundOver}
          onMouseOut={buttonBackGroundOut}>
          {time}
        </button>
      </div>

    </div>


  )
}

export default Time