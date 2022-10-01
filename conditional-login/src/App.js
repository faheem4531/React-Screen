import React from 'react';
import Login from './components/form/Login';



var userIsRegistered = true;
var mainDispaly = true;

function App() {
  return (
    <div className="container">
      {
        mainDispaly ?
          <Login
            isRegister={userIsRegistered}
          />
          :
          <h1>Welcome</h1>
      }

    </div>
  )
}

export default App;
