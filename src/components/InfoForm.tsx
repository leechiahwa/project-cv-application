import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo";
import Preview from "./Preview";

export default function InfoForm() {
  const [showPreview, setShowPreview] = useState(false);
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
    previewOnSubmit = <Preview />;
  }

  return (
    <div className="d-flex">
      <div id="form">
        <PersonalInfo />
        <EducationInfo />
        <WorkInfo />
      </div>
      <div id="preview">{previewOnSubmit}</div>
    </div>
  );
}
