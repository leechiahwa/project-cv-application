import { useState } from "react";

export default function WorkDetails() {
const [person, setPerson] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibility: "",
    workDurationFrom: "",
    workDurationTo: "",
})

  return (
    <div>
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
  );
}
