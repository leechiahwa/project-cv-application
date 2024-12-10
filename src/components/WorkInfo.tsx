import React, { useState } from "react";

function WorkInfo() {
  const [work, setWork] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibility: "",
    workDurationFrom: "",
    workDurationTo: "",
  });
  const [isWorkInfoActive, setWorkInfoActive] = useState(false);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWork({ ...work, companyName: e.target.value });
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWork({ ...work, positionTitle: e.target.value });
  };

  const handleResponsibilityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWork({ ...work, mainResponsibility: e.target.value });
  };

  const handleWorkFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWork({ ...work, workDurationFrom: e.target.value });
  };

  const handleWorkToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWork({ ...work, workDurationTo: e.target.value });
  };

  const onSubmit = () => {
    console.log(work);
  };

  return (
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
      <button
        onClick={() => setWorkInfoActive(!isWorkInfoActive)}
        className="btn btn-primary"
        type="submit"
      >
        {isWorkInfoActive ? "Hide" : "Show"}
      </button>
      <form id="work-info" className={isWorkInfoActive ? "active" : undefined}>
        Company Name:{" "}
        <input
          type="text"
          placeholder="Google"
          value={work.companyName}
          name="companyName"
          onChange={handleCompanyChange}
          className="form-control"
        />
        Position Title:{" "}
        <input
          type="text"
          placeholder="Software Engineer"
          value={work.positionTitle}
          name="positionTitle"
          onChange={handlePositionChange}
          className="form-control"
        />
        Main Responsibility:{" "}
        <input
          type="text"
          placeholder="Solving problems with software"
          value={work.mainResponsibility}
          name="mainResponsibility"
          onChange={handleResponsibilityChange}
          className="form-control"
        />
        Work Duration:{" "}
        <input
          type="date"
          value={work.workDurationFrom}
          name="workDurationFrom"
          onChange={handleWorkFromChange}
          className="form-control"
        />{" "}
        to{" "}
        <input
          type="date"
          value={work.workDurationTo}
          name="workDurationTo"
          onChange={handleWorkToChange}
          className="form-control"
        />
      </form>
      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default WorkInfo;
