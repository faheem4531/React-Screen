import React from "react";

import Contact from "./component/Contact";
import contacts from "./component/ContactDetails";
import Image from "./component/utility/Image";


function Card (detail){
  return(
    <Contact
    key={detail.id}
    name={detail.name}
    img={detail.imgURL}
    tele={detail.phone}
    email={detail.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Image
      img="https://avatars.githubusercontent.com/u/103141192?s=400&u=9ccb9bce2960c573b57feb2a4b33b02626e48722&v=4"
      />
      <h2 className="heading my-name">Mushab Faheem</h2>

      {contacts.map(Card)}
      {/* <Contact
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
      /> */}
    </div>
  );
}

export default App;
