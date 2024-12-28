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

interface PreviewProps {
  personal: PersonalInfo;
  education: EducationInfo;
  work: WorkInfo;
}

function Preview({ personal, education, work }: PreviewProps) {
  return (
    <div className="preview-container">
    <h2 className="preview-header">Resume Preview</h2>
    <div className="section">
      <h3>Personal Information</h3>
      <p>
        <strong>Name:</strong> {personal.name}
      </p>
      <p>
        <strong>Email:</strong> {personal.email}
      </p>
      <p>
        <strong>Age:</strong> {personal.age}
      </p>
      <p>
        <strong>Phone:</strong> {personal.phone}
      </p>
    </div>
    <div className="section">
      <h3>Education</h3>
      <p>
        <strong>School Name:</strong> {education.schoolName}
      </p>
      <p>
        <strong>Course Name:</strong> {education.courseName}
      </p>
      <p>
        <strong>Study Period:</strong> {education.studyDateFrom} - {education.studyDateTo}
      </p>
    </div>
    <div className="section">
      <h3>Work Experience</h3>
      <p>
        <strong>Company Name:</strong> {work.companyName}
      </p>
      <p>
        <strong>Position Title:</strong> {work.positionTitle}
      </p>
      <p>
        <strong>Main Responsibility:</strong> {work.mainResponsibility}
      </p>
      <p>
        <strong>Work Duration:</strong> {work.workDurationFrom} - {work.workDurationTo}
      </p>
    </div>
  </div>
  );
}

export default Preview;
