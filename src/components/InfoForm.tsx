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
interface EducationInfo {
  schoolName: string;
  courseName: string;
  studyDateFrom: string;
  studyDateTo: string;
}
interface WorkInfo {
  companyName: string;
  positionTitle: string;
  mainResponsibility: string;
  workDurationFrom: string;
  workDurationTo: string;
}

// Add default values for each interface
const defaultPersonalInfo: PersonalInfo = {
  name: "",
  email: "",
  age: 0,
  phone: "",
};

const defaultEducationInfo: EducationInfo = {
  schoolName: "",
  courseName: "",
  studyDateFrom: "",
  studyDateTo: "",
};

const defaultWorkInfo: WorkInfo = {
  companyName: "",
  positionTitle: "",
  mainResponsibility: "",
  workDurationFrom: "",
  workDurationTo: "",
};

export default function InfoForm() {
  const [showPreview, setShowPreview] = useState(false);
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfo>(defaultPersonalInfo);
  const [educationInfo, setEducationInfo] =
    useState<EducationInfo>(defaultEducationInfo);
  const [workInfo, setWorkInfo] = useState<WorkInfo>(defaultWorkInfo);

  const handlePersonalInfo = (data: PersonalInfo) => {
    console.log("Data from Personal Info: ", data);
    setPersonalInfo(data);
    setShowPreview(true);
  };

  const handleEducationInfo = (data: EducationInfo) => {
    console.log("Data from Education Info: ", data);
    setEducationInfo(data);
    setShowPreview(true);
  };

  const handleWorkInfo = (data: WorkInfo) => {
    console.log("Data from Work Info: ", data);
    setWorkInfo(data);
    setShowPreview(true);
  };

  let previewOnSubmit = (
    <h3 id="preview" className="card">
      Resume in progress...
    </h3>
  );

  // Show the preview when submit button is clicked
  if (showPreview) {
    previewOnSubmit = (
      <Preview
        personal={personalInfo}
        education={educationInfo}
        work={workInfo}
      />
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div id="form">
        <PersonalInfo sendDataToPreview={handlePersonalInfo} />
        <EducationInfo sendDataToPreview={handleEducationInfo} />
        <WorkInfo sendDataToPreview={handleWorkInfo} />
      </div>
      <div className="preview">{previewOnSubmit}</div>
    </div>
  );
}
