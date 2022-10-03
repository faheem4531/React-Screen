import React, { useState } from "react";
import './style.css';

const Time = () => {

  //setInterval function will call updateTime fun at every 1000 mili sec
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();


  //hooks 
  const [time, setTime] = useState(now);
  const [isBackground, setBackGroud] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(
    {
      fName: "",
      lName: "",
      email: ""
    }
  );


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

  function handleFullDetails(event) {
    const { name, value } = event.target;
    setPersonalDetails(preValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }



  return (
    <div>
      <h1
        className="welcome-heading">Hi {personalDetails.fName} {personalDetails.lName}</h1>
      <p>{personalDetails.email}</p>
      <form>
        {/* First Name Inputfield */}
        <input
          onChange={handleFullDetails}
          className="name-input"
          name="fName"
          value={personalDetails.fName}
          type="text"
          placeholder="First name"
        />
        {/* Last Name Inputfield */}
        <input
          onChange={handleFullDetails}
          className="name-input"
          name="lName"
          value={personalDetails.lName}
          type="text"
          placeholder="Last name"
        />
        {/* Email Field*/}
        <input
          onChange={handleFullDetails}
          className="name-input"
          name="email"
          value={personalDetails.email}
          type="email"
          placeholder="Email"
        />

        <button
          // onClick={handleGreeting}
          type="submit"
          className="btn-submit"
        >Submit</button>
      </form>


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