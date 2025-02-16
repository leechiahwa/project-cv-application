import React, { useState } from "react";

interface EducationInfoProps {
  sendDataToPreview: (data: {
    schoolName: string;
    courseName: string;
    studyDateFrom: string;
    studyDateTo: string;
  }) => void;
}

function EducationInfo({ sendDataToPreview }: EducationInfoProps) {
  const [education, setEducation] = useState({
    schoolName: "",
    courseName: "",
    studyDateFrom: "",
    studyDateTo: "",
  });

  // Send data to Preview component
  const handleSubmit = () => {
    sendDataToPreview(education);
  };

  const [isEducationActive, setEducationActive] = useState(false);

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, schoolName: e.target.value });
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, courseName: e.target.value });
  };

  const handleDateFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, studyDateFrom: e.target.value });
  };

  const handleDateToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, studyDateTo: e.target.value });
  };

  return (
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
          placeholder="SEGi College Penang"
          value={education.schoolName}
          name="schoolName"
          onChange={handleSchoolChange}
          className="form-control"
        />
        Course Name:{" "}
        <input
          type="text"
          placeholder="Bachelors of Computer Science"
          value={education.courseName}
          name="courseName"
          onChange={handleCourseChange}
          className="form-control"
        />
        Date of Study:{" "}
        <input
          type="date"
          value={education.studyDateFrom}
          name="studyDateFrom"
          onChange={handleDateFromChange}
          className="form-control"
        />{" "}
        To{" "}
        <input
          type="date"
          value={education.studyDateTo}
          name="studyDateTo"
          onChange={handleDateToChange}
          className="form-control"
        />
      </form>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EducationInfo;
