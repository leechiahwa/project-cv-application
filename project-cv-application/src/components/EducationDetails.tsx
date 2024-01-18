import { useState } from "react";

export default function EducationDetails() {
const [person, setPerson] = useState({
    schoolName: "",
    courseName: "",
    studyDateFrom: "",
    studyDateTo: "",
})

  return (
    <div>
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
    </div>
  );
}
