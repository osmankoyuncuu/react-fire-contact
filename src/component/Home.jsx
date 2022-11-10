import React from "react";
import AddContact from "./AddContact";
import Contacts from "./Contacts";
import Header from "./Header";
import { useContactListener } from "../utils/firebase";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

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
    <div className="h-full flex flex-col md:flex-row gap-4 lg:gap-10 xl:gap-20  items-center justify-center">
      <div className="w-full px-5 sm:px-10 md:px-0 md:w-4/12 lg:w-3/12 h-60 mt-2 md:mt-0 mb-16 md:mb-0">
        <Header header={"Add Contact"} />
        <AddContact
          addContact={addContact}
          setAddContact={setAddContact}
          setEdit={setEdit}
          edit={edit}
        />
      </div>
      <div className="w-full px-5 sm:px-10 md:px-0 md:w-3/6 mt-5 md:mt-0">
        <Header header={"Contacts"} />
        <Contacts
          setAddContact={setAddContact}
          contactList={contactList}
          setEdit={setEdit}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
