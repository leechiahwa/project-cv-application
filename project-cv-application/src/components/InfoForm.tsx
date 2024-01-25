import { submitButton, editButton } from "./buttons";
import { useInfoForm } from "./InfoFormContext";

export default function InfoForm() {
  const { person, setPerson } = useInfoForm();

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  function handleAgeChange(e) {
    setPerson({
      ...person,
      age: e.target.value,
    });
  }

  function handlePhoneChange(e) {
    setPerson({
      ...person,
      phone: e.target.value,
    });
  }

  return (
    <>
      <div>
        <h2>Personal Info</h2>
        <form className="d-flex flex-column p-2">
          Name:{" "}
          <input type="text" value={person.name} onChange={handleNameChange} />
          Email: <input type="email" value={person.email} onChange={handleEmailChange}/>
          Age: <input type="number" value={person.age} onChange={handleAgeChange}/>
          Phone: <input type="tel" value={person.phone} onChange={handlePhoneChange}/>
        </form>
        <button className="btn btn-secondary" onClick={editButton}>Edit</button>
        <button className="btn btn-primary" onClick={submitButton}>Submit</button>
      </div>
    </>
  );
};