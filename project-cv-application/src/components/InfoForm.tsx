import { useState } from "react";

function InfoForm() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    schoolName: "",
    courseName: "",
    studyDateFrom: "",
    studyDateTo: "",
    companyName: "",
    positionTitle: "",
    mainResponsibility: "",
    workDurationFrom: "",
    workDurationTo: "",
  });

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
      <div className="">
        <label className="d-flex flex-column p-2">
          Name:{" "}
          <input type="name" value={person.name} onChange={handleNameChange} />
          Email: <input type="email" value={person.email} onChange={handleEmailChange}/>
          Age: <input type="number" value={person.age} onChange={handleAgeChange}/>
          Phone: <input type="tel" value={person.phone} onChange={handlePhoneChange}/>
        </label>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-primary">Submit</button>
        <br></br>
        <label className="d-flex flex-column p-2">
          School Name: <input type="text" value={person.schoolName} />
          Course Name: <input type="text" value={person.courseName} />
          Date of Study: <input
            type="date"
            value={person.studyDateFrom}
          /> To <input type="date" value={person.studyDateTo} />
        </label>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-primary">Submit</button>
        <br></br>
        <label className="d-flex flex-column p-2">
          Company Name: <input type="text" value={person.companyName} />
          Position Title: <input type="text" value={person.positionTitle} />
          Main Responsibility:{" "}
          <input type="text" value={person.mainResponsibility} />
          Work Duration: <input
            type="date"
            value={person.workDurationFrom}
          /> to <input type="date" value={person.workDurationTo} />
        </label>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-primary">Submit</button>
      </div>
      <div>
        <p>{person.name}</p>
        <p>{person.email}</p>
        <p>{person.age}</p>
        <p>{person.phone}</p>
      </div>
    </>
  );
}

export default InfoForm;
