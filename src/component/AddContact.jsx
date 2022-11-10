import { addContactItem, editContact } from "../utils/firebase";
const AddContact = ({ addContact, setAddContact, edit, setEdit }) => {
  const { name, phone, gender } = addContact;

  const handleChange = (e) => {
    setAddContact({ ...addContact, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? editContact(addContact, setEdit) : addContactItem(addContact);
    setAddContact({ name: "", phone: "", gender: "" });
  };
  return (
    <div className=" bg-white text-center h-full rounded-md">
      {/*Name*/}
      <form onSubmit={handleSubmit} className="w-full m-auto px-6">
        <div className="flex my-3 relative">
          <i className="fa-solid fa-user absolute top-6 left-3 text-gray-600" />
          <input
            type="text"
            className="
              form-control
              block
              w-full
              pl-8
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              mt-3
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        {/*phone*/}
        <div className="flex justify-center relative mb-3">
          <i className="fa-solid fa-phone absolute top-3 left-3 text-gray-600" />
          <input
            type="tel"
            className="
              form-control
              block
              w-full
              pl-8
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            pattern="\d*"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </div>
        {/*Gender*/}
        <div className="flex justify-center mb-3">
          <select
            className="form-select appearance-none block
              w-full
              pl-8
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            name="gender"
            value={gender}
            onChange={handleChange}
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/*button*/}
        <div className="flex space-x-2 justify-center">
          <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block w-full mt-1 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
