import React from 'react';
import Form from './components/form/Form';

var isLoggedIn = false;


function checkCondition() {
  if (isLoggedIn === true) {
    return <h1>Hello User</h1>
  }
  else if (isLoggedIn === false) {
    return <Form />
  }
}


function App() {
  return (
    <div className="container">
      {checkCondition()}
    </div>
  )
}

export default App;
