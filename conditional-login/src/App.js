import React from 'react';
import Form from './components/form/Form';

var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {
        //Ternary Operator
        // condition ? do if true : do if false

        isLoggedIn ? <h1>Hello User</h1> : <Form />
      }
    </div>
  )
}

export default App;
