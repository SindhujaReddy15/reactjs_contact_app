import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
     {
      id : "1",
      name: "Sindhu",
      email: "sindhu12@gmail.com"
     },
     {
      id : "2",
      name: "Sai",
      email: "sai03@gmail.com"
     },
     {
      id : "3",
      name: "neha",
      email: "neha2@gmail.com"
     }
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
