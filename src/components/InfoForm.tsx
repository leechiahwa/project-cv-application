import { useState } from "react";
import { submitButton, editButton } from "./buttons";

export default function InfoForm() {
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

  // Handle change for input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  }

  const [showPreview, setShowPreview] = useState(false);

  // TODO: should be a better way to do this part
  function onSubmit() {
    setShowPreview(true);
  }

  let previewOnSubmit = <h3>Resume in progress...</h3>;

  if (showPreview) {
    previewOnSubmit = (
      <>
        <p className="preview name">Hello, I am {person.name}!</p>
        <p className="preview">{person.email}</p>
        <p className="preview">I am {person.age} years old.</p>
        <p className="preview">{person.phone}</p>
        <p className="preview">
          I am currently studying {person.courseName} at {person.schoolName}. I
          started studying on {person.studyDateFrom} and is expected to graduate
          on {person.studyDateTo}. {/* need to format date */}
        </p>
        <p>
          I currently work at {person.companyName} as a {person.positionTitle}.
          My main responsibility is to {person.mainResponsibility}. I've worked
          here from {person.workDurationFrom} to {person.workDurationTo}.
        </p>
      </>
    );
  }

  // TODO: Design the preview to look better
  // TODO: Only show the preview when submit button is clicked
  // TODO: Only enable the submit button when all fields are filled

  return (
    <div className="d-flex" id="form">
      <div>
        <h2 className="header">Personal Info</h2>
        <form className="d-flex flex-column p-2">
          Name:{" "}
          <input
            type="text"
            value={person.name}
            name="name"
            onChange={handleChange}
          />
          Email:{" "}
          <input
            type="email"
            value={person.email}
            name="email"
            onChange={handleChange}
          />
          Age:{" "}
          <input
            type="number"
            value={person.age}
            name="age"
            onChange={handleChange}
          />
          Phone:{" "}
          <input
            type="tel"
            value={person.phone}
            name="phone"
            onChange={handleChange}
          />
        </form>
        <button className="btn btn-secondary" onClick={editButton}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={submitButton}>
          Submit
        </button>
      </div>
      <div>
        <h2 className="header">Education Form</h2>
        <form className="d-flex flex-column p-2">
          School Name:{" "}
          <input
            type="text"
            value={person.schoolName}
            name="schoolName"
            onChange={handleChange}
          />
          Course Name:{" "}
          <input
            type="text"
            value={person.courseName}
            name="courseName"
            onChange={handleChange}
          />
          Date of Study:{" "}
          <input
            type="date"
            value={person.studyDateFrom}
            name="studyDateFrom"
            onChange={handleChange}
          />{" "}
          To{" "}
          <input
            type="date"
            value={person.studyDateTo}
            name="studyDateTo"
            onChange={handleChange}
          />
        </form>
        {/* Hides preview when edit button is clicked */}
        <button
          className="btn btn-secondary"
          onClick={() => setShowPreview(false)}
        >
          Edit
        </button>
        {/* Shows preview when submit button is clicked */}
        <button className="btn btn-primary" onClick={onSubmit}>
          {" "}
          Submit
        </button>
      </div>
      <div>
        <h2 className="header">Work Info</h2>
        <form className="d-flex flex-column p-2">
          Company Name:{" "}
          <input
            type="text"
            value={person.companyName}
            name="companyName"
            onChange={handleChange}
          />
          Position Title:{" "}
          <input
            type="text"
            value={person.positionTitle}
            name="positionTitle"
            onChange={handleChange}
          />
          Main Responsibility:{" "}
          <input
            type="text"
            value={person.mainResponsibility}
            name="mainResponsibility"
            onChange={handleChange}
          />
          Work Duration:{" "}
          <input
            type="date"
            value={person.workDurationFrom}
            name="workDurationFrom"
            onChange={handleChange}
          />{" "}
          to{" "}
          <input
            type="date"
            value={person.workDurationTo}
            name="workDurationTo"
            onChange={handleChange}
          />
        </form>
        <button className="btn btn-secondary" onClick={editButton}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={submitButton}>
          Submit
        </button>
      </div>
      {previewOnSubmit}
    </div>
  );
}
