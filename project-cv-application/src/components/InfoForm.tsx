import { useState } from "react";

function InfoForm() {
  function buttonClicked() {
    alert("Button clicked");
  }

  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
  });

  const handleChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };


  return (
    <>
      <label className="d-flex flex-column p-2">
        Name: <input type="name" value={person.name} onChange={handleChange} />
        Email: <input type="email" />
        Age: <input type="number" />
        Phone: <input type="tel" />
      </label>
      <button onClick={buttonClicked} className="btn btn-secondary">
        Edit
      </button>
      <button onClick={buttonClicked} className="btn btn-primary">
        Submit
      </button>
    </>
  );
}

export default InfoForm;