import { useState } from "react";
import { submitButton, editButton } from "./buttons";


export default function WorkDetails() {
  const [person, setPerson] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibility: "",
    workDurationFrom: "",
    workDurationTo: "",
  });

  function handleCompanyNameChange(e) {
    setPerson({
      ...person,
      companyName: e.target.value
    })
  }

  function handlePositionTitleChange(e) {
    setPerson({
      ...person,
      positionTitle: e.target.value
    })
  }

  function handleMainResponsibilityChange(e) {
    setPerson({
      ...person,
      mainResponsibility: e.target.value
    })
  }

  function handleWorkDurationFromChange(e) {
    setPerson({
      ...person,
      workDurationFrom: e.target.value
    })
  }

  function handleWorkDurationToChange(e) {
    setPerson({
      ...person,
      workDurationTo: e.target.value
    })
  }

  return (
    <div>
      <label className="d-flex flex-column p-2">
        Company Name: <input type="text" value={person.companyName} onChange={handleCompanyNameChange}/>
        Position Title: <input type="text" value={person.positionTitle} onChange={handlePositionTitleChange}/>
        Main Responsibility:{" "}
        <input type="text" value={person.mainResponsibility} onChange={handleMainResponsibilityChange}/>
        Work Duration: <input
          type="date"
          value={person.workDurationFrom}
          onChange={handleWorkDurationFromChange}
        /> to <input type="date" value={person.workDurationTo} onChange={handleWorkDurationToChange}/>
      </label>
      <button className="btn btn-secondary" onClick={editButton}>Edit</button>
      <button className="btn btn-primary" onClick={submitButton}>Submit</button>
    </div>
  );
}
