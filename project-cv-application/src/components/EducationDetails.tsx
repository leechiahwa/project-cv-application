import { useState } from "react";
import { submitButton, editButton } from "./buttons";


export default function EducationDetails() {
const [person, setPerson] = useState({
    schoolName: "",
    courseName: "",
    studyDateFrom: "",
    studyDateTo: "",
})

function handleSchoolNameChange(e) {
  setPerson({
    ...person,
    schoolName: e.target.value
  })
}

function handleCourseNameChange(e) {
  setPerson({
    ...person,
    courseName: e.target.value
  })
}

function handleStudyDateFromChange(e) {
  setPerson({
    ...person,
    studyDateFrom: e.target.value
  })
}

function handleStudyDateToChange(e) {
  setPerson({
    ...person,
    studyDateTo: e.target.value
  })
}

  return (
    <div>
      <h2>Education Form</h2>
      <form className="d-flex flex-column p-2">
        School Name: <input type="text" value={person.schoolName} onChange={handleSchoolNameChange}/>
        Course Name: <input type="text" value={person.courseName} onChange={handleCourseNameChange}/>
        Date of Study: <input
          type="date"
          value={person.studyDateFrom}
          onChange={handleStudyDateFromChange}
        /> To <input type="date" value={person.studyDateTo} onChange={handleStudyDateToChange}/>
      </form>
      <button className="btn btn-secondary" onClick={editButton}>Edit</button>
      <button className="btn btn-primary" onClick={submitButton}>Submit</button>
    </div>
  );
}
