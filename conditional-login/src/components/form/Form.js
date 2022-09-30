import React from "react";

import Button from "../subComponents/Button";
import Input from "../subComponents/Input";

const Form = () => {
  return (
    <form className="form">
      <h1>Hello</h1>
      <Input
        type='text'
        placeholder='Username'
      />
      <Input
        type='passward'
        placeholder='Password'
      />
      <Button />
    </form>
  )
}

export default Form;