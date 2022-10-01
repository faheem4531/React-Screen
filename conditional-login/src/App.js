import React from 'react';
import Login from './components/form/Login';
import Time from './components/time/Time';


var userIsRegistered = true;
var mainDispaly = false;

function App() {
  return (
    <div className="container">
      {
        mainDispaly ?
          <Login
            isRegister={userIsRegistered}
          />
          :
          <Time/>
      }

    </div>
  )
}

export default App;
