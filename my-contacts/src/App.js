import React from "react";

import Contact from "./component/Contact";
import contacts from "./component/ContactDetails";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contact
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tele={contacts[0].phone}
        email={contacts[0].email}
      />
      <Contact
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tele={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tele={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
