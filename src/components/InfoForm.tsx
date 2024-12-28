import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo";
import Preview from "./Preview";

interface PersonalInfo {
  name: string;
  email: string;
  age: number;
  phone: string;
}

export default function InfoForm() {
  const [showPreview, setShowPreview] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  const handlePersonalInfo = (data: PersonalInfo) => {
    console.log("Data from Personal Info: ", data);
    setPersonalInfo(data);
    setShowPreview(true);
  };

  let previewOnSubmit = (
    <h3 id="preview" className="card">
      Resume in progress...
    </h3>
  );

  // Show the preview when submit button is clicked
  if (showPreview && personalInfo) {
    previewOnSubmit = <Preview personal={personalInfo} />;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div id="form">
        <PersonalInfo sendDataToPreview={handlePersonalInfo} />
        <EducationInfo />
        <WorkInfo />
      </div>
      <div className="preview">{previewOnSubmit}</div>
    </div>
  );
}
