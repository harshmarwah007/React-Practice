/** @format */

import React from "react";
import Contact from "./components/Contact";
import contacts from "./contacts";
const App = () => {
  // const createCard = (contact) =>
  // {

  //   return (
  //     <Contact
  //       name={contact.name}
  //       imgURL={contact.imgURL}
  //       phone={contact.phone}
  //       email={contact.email}
  //     />
  //   )

  // }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Contact
          // when multiple cards are created then it must contain key value
          key={contact.id}
          id={contact.id}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}

      {/* <Contact
        imgURL= {contacts[0].imgURL}
        phone= {contacts[0].phone}
        email= {contacts[0].email}
        name=  {contacts[0].name}
      />
      <Contact
        imgURL= {contacts[1].imgURL}
        phone= {contacts[1].phone}
        email= {contacts[1].email}
        name=  {contacts[1].name}
      />
      <Contact
        imgURL= {contacts[2].imgURL}
        phone= {contacts[2].phone}
        email= {contacts[2].email}
        name=  {contacts[2].name}
      /> */}
    </div>
  );
};

export default App;
