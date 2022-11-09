import React from "react";
import AddContact from "./AddContact";
import Contacts from "./Contacts";
import Header from "./Header";
import { useContactListener } from "../utils/firebase";
import { useState } from "react";

const Home = () => {
  const [contactList, setContactList] = useState([]);
  const [addContact, setAddContact] = useState({
    name: "",
    phone: "",
    gender: "",
  });
  const [edit, setEdit] = useState(false);
  useContactListener(setContactList);
  return (
    <div className="h-full flex gap-20  items-center justify-center">
      <div className="w-3/12 h-60">
        <Header header={"Add Contact"} />
        <AddContact
          addContact={addContact}
          setAddContact={setAddContact}
          edit={edit}
        />
      </div>
      <div className="w-3/6">
        <Header header={"Contacts"} />
        <Contacts
          setAddContact={setAddContact}
          contactList={contactList}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
};

export default Home;
