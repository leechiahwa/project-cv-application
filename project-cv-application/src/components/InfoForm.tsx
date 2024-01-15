import { useState } from "react";

function InfoForm() {
  // Submit and edit button function
  function buttonClicked() {
    alert("Button clicked");
  }

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

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <label className="d-flex flex-column p-2">
        Name: <input type="name" value={person.name} onChange={handleChange} />
        Email:{" "}
        <input type="email" value={person.email} onChange={handleChange} />
        Age: <input type="number" value={person.age} onChange={handleChange} />
        Phone: <input type="tel" value={person.phone} onChange={handleChange} />
      </label>
      <button onClick={buttonClicked} className="btn btn-secondary">
        Edit
      </button>
      <button onClick={buttonClicked} className="btn btn-primary">
        Submit
      </button>
      <br></br>
      <label className="d-flex flex-column p-2">
        School Name:{" "}
        <input type="text" value={person.schoolName} onChange={handleChange} />
        Course Name:{" "}
        <input type="text" value={person.courseName} onChange={handleChange} />
        Date of Study:{" "}
        <input
          type="date"
          value={person.studyDateFrom}
          onChange={handleChange}
        />{" "}
        To{" "}
        <input type="date" value={person.studyDateTo} onChange={handleChange} />
      </label>
      <button className="btn btn-secondary">Edit</button>
      <button className="btn btn-primary">Submit</button>
      <br></br>
      <label className="d-flex flex-column p-2">
        Company Name:{" "}
        <input type="text" value={person.companyName} onChange={handleChange} />
        Position Title:{" "}
        <input
          type="text"
          value={person.positionTitle}
          onChange={handleChange}
        />
        Main Responsibility:{" "}
        <input
          type="text"
          value={person.mainResponsibility}
          onChange={handleChange}
        />
        Work Duration:{" "}
        <input
          type="date"
          value={person.workDurationFrom}
          onChange={handleChange}
        />{" "}
        to{" "}
        <input
          type="date"
          value={person.workDurationTo}
          onChange={handleChange}
        />
      </label>
      <button className="btn btn-secondary">Edit</button>
      <button className="btn btn-primary">Submit</button>
    </>
  );
}

export default InfoForm;
