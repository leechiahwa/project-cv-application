import { useState } from "react";
import { submitButton, editButton } from "./buttons";
// import { useInfoForm } from "./InfoFormContext";

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
  function handleSchoolNameChange(e) {
    setPerson({
      ...person,
      schoolName: e.target.value,
    });
  }

  function handleCourseNameChange(e) {
    setPerson({
      ...person,
      courseName: e.target.value,
    });
  }

  function handleStudyDateFromChange(e) {
    setPerson({
      ...person,
      studyDateFrom: e.target.value,
    });
  }

  function handleStudyDateToChange(e) {
    setPerson({
      ...person,
      studyDateTo: e.target.value,
    });
  }

  function handleCompanyNameChange(e) {
    setPerson({
      ...person,
      companyName: e.target.value,
    });
  }

  function handlePositionTitleChange(e) {
    setPerson({
      ...person,
      positionTitle: e.target.value,
    });
  }

  function handleMainResponsibilityChange(e) {
    setPerson({
      ...person,
      mainResponsibility: e.target.value,
    });
  }

  function handleWorkDurationFromChange(e) {
    setPerson({
      ...person,
      workDurationFrom: e.target.value,
    });
  }

  function handleWorkDurationToChange(e) {
    setPerson({
      ...person,
      workDurationTo: e.target.value,
    });
  }

  return (
    <>
      <div>
        <h2>Personal Info</h2>
        <form className="d-flex flex-column p-2">
          Name:{" "}
          <input type="text" value={person.name} onChange={handleNameChange} />
          Email:{" "}
          <input
            type="email"
            value={person.email}
            onChange={handleEmailChange}
          />
          Age:{" "}
          <input type="number" value={person.age} onChange={handleAgeChange} />
          Phone:{" "}
          <input type="tel" value={person.phone} onChange={handlePhoneChange} />
        </form>
        <button className="btn btn-secondary" onClick={editButton}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={submitButton}>
          Submit
        </button>
      </div>
      <div>
        <h2>Education Form</h2>
        <form className="d-flex flex-column p-2">
          School Name:{" "}
          <input
            type="text"
            value={person.schoolName}
            onChange={handleSchoolNameChange}
          />
          Course Name:{" "}
          <input
            type="text"
            value={person.courseName}
            onChange={handleCourseNameChange}
          />
          Date of Study:{" "}
          <input
            type="date"
            value={person.studyDateFrom}
            onChange={handleStudyDateFromChange}
          />{" "}
          To{" "}
          <input
            type="date"
            value={person.studyDateTo}
            onChange={handleStudyDateToChange}
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
        <h2>Work Info</h2>
        <form className="d-flex flex-column p-2">
          Company Name:{" "}
          <input
            type="text"
            value={person.companyName}
            onChange={handleCompanyNameChange}
          />
          Position Title:{" "}
          <input
            type="text"
            value={person.positionTitle}
            onChange={handlePositionTitleChange}
          />
          Main Responsibility:{" "}
          <input
            type="text"
            value={person.mainResponsibility}
            onChange={handleMainResponsibilityChange}
          />
          Work Duration:{" "}
          <input
            type="date"
            value={person.workDurationFrom}
            onChange={handleWorkDurationFromChange}
          />{" "}
          to{" "}
          <input
            type="date"
            value={person.workDurationTo}
            onChange={handleWorkDurationToChange}
          />
        </form>
        <button className="btn btn-secondary" onClick={editButton}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={submitButton}>
          Submit
        </button>
      </div>
    </>
  );
}
