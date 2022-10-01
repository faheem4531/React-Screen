import React from "react";

import Input from "../subComponents/Input";

const Login = (props) => {
  return (
    <form className="form">
      <h1>Hi!</h1>
      <Input
        type="text"
        placeholder="Username"
      />
      <Input
        type="password"
        placeholder="Password"
      />
      {
        props.isRegister == true && <input type="password" placeholder="Confirm Password" />
      }

      <button type="submit">
        {props.isRegister ? "Login" : "Register"}
      </button>
    </form>

  )
}

export default Login;