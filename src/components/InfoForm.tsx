import { useState } from "react";
import { submitButton, editButton } from "./buttons";
import moment from "moment";

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
  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  }

  // State for showing and hiding the preview
  const [showPreview, setShowPreview] = useState(false);
  // States for showing and hiding forms
  const [isPersonalInfoActive, setPersonalInfoActive] = useState(false);
  const [isEducationActive, setEducationActive] = useState(false);
  const [isWorkInfoActive, setWorkInfoActive] = useState(false);

  // TODO: should be a better way to do this part
  function onSubmit() {
    setShowPreview(true);
  }

  let previewOnSubmit = (
    <h3 id="preview" className="card">
      Resume in progress...
    </h3>
  );

  // Show the preview when submit button is clicked
  if (showPreview) {
    previewOnSubmit = (
      <div className="d-flex flex-column card">
        <p className="preview name">Hello, I am {person.name}!</p>
        <p className="preview">{person.email}</p>
        <p className="preview">I am {person.age} years old.</p>
        <p className="preview">{person.phone}</p>
        <p className="preview">
          I am currently studying {person.courseName} at {person.schoolName}. I
          started studying on{" "}
          {moment(person.studyDateFrom).format("DD/MM/YYYY")} and is expected to
          graduate on {moment(person.studyDateTo).format("DD/MM/YYYY")}.
        </p>
        <p>
          I currently work at {person.companyName} as a {person.positionTitle}.
          My main responsibility is to {person.mainResponsibility}. I've worked
          here from {moment(person.workDurationFrom).format("DD/MM/YYYY")} to{" "}
          {moment(person.workDurationTo).format("DD/MM/YYYY")}.
        </p>
      </div>
    );
  }

  // TODO: Design the preview to look better
  // TODO: Only enable the submit button when all fields are filled
  // TODO: Toggle to show/hide the form
  // TODO: Only show preview text after form is filled
  return (
    <div className="d-flex">
      <div className="d-flex flex-column" id="form">
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <h2 className="header">Personal Info</h2>

          <button
            onClick={() => setPersonalInfoActive(!isPersonalInfoActive)}
            className="btn btn-primary"
            type="submit"
          >
            {isPersonalInfoActive ? "Hide" : "Show"}
          </button>
          {/* TODO: Add an arrow button that sets active on click */}
          <form
            id="personal-info"
            className={isPersonalInfoActive ? "active" : undefined}
          >
            Name:{""}
            <input
              type="text"
              value={person.name}
              name="name"
              onChange={handleChange}
              className="form-control"
            />
            Email:{" "}
            <input
              type="email"
              value={person.email}
              name="email"
              onChange={handleChange}
              className="form-control"
            />
            Age:{" "}
            <input
              type="number"
              value={person.age}
              name="age"
              onChange={handleChange}
              className="form-control"
            />
            Phone:{" "}
            <input
              type="tel"
              value={person.phone}
              name="phone"
              onChange={handleChange}
              className="form-control"
            />
          </form>
          <button
            className="btn btn-secondary"
            onClick={() => setShowPreview(false)}
          >
            Edit
          </button>
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
          </svg>
          <h2 className="header">Education Form</h2>
          <button
            onClick={() => setEducationActive(!isEducationActive)}
            className="btn btn-primary"
            type="submit"
          >
            {isEducationActive ? "Hide" : "Show"}
          </button>
          <form
            id="education-form"
            className={isEducationActive ? "active" : undefined}
          >
            School Name:{" "}
            <input
              type="text"
              value={person.schoolName}
              name="schoolName"
              onChange={handleChange}
              className="form-control"
            />
            Course Name:{" "}
            <input
              type="text"
              value={person.courseName}
              name="courseName"
              onChange={handleChange}
              className="form-control"
            />
            Date of Study:{" "}
            <input
              type="date"
              value={person.studyDateFrom}
              name="studyDateFrom"
              onChange={handleChange}
              className="form-control"
            />{" "}
            To{" "}
            <input
              type="date"
              value={person.studyDateTo}
              name="studyDateTo"
              onChange={handleChange}
              className="form-control"
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
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-workspace"
            viewBox="0 0 16 16"
          >
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
          </svg>
          <h2 className="header">Work Info</h2>
          {/* TODO: Add an arrow button that sets active on click */}
          <button
            onClick={() => setWorkInfoActive(!isWorkInfoActive)}
            className="btn btn-primary"
            type="submit"
          >
            {isWorkInfoActive ? "Hide" : "Show"}
          </button>
          <form
            id="work-info"
            className={isWorkInfoActive ? "active" : undefined}
          >
            Company Name:{" "}
            <input
              type="text"
              value={person.companyName}
              name="companyName"
              onChange={handleChange}
              className="form-control"
            />
            Position Title:{" "}
            <input
              type="text"
              value={person.positionTitle}
              name="positionTitle"
              onChange={handleChange}
              className="form-control"
            />
            Main Responsibility:{" "}
            <input
              type="text"
              value={person.mainResponsibility}
              name="mainResponsibility"
              onChange={handleChange}
              className="form-control"
            />
            Work Duration:{" "}
            <input
              type="date"
              value={person.workDurationFrom}
              name="workDurationFrom"
              onChange={handleChange}
              className="form-control"
            />{" "}
            to{" "}
            <input
              type="date"
              value={person.workDurationTo}
              name="workDurationTo"
              onChange={handleChange}
              className="form-control"
            />
          </form>
          <button
            className="btn btn-secondary"
            onClick={() => setShowPreview(false)}
          >
            Edit
          </button>
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div id="preview">{previewOnSubmit}</div>
    </div>
  );
}
