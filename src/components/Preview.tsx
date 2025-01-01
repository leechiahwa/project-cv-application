import WorkInfo from "./WorkInfo";

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
  const handleDownloadPDF = () => {
    console.log("Downloading pdf");
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="preview-container">
        {/* Header Section */}
        <header className="preview-header">
          <h1>{personal.name || "Melvin Lee"}</h1>
          <p className="position-title">
            {work.positionTitle || "Software Developer"}
          </p>
        </header>

        {/* Personal Section */}
        <section className="personal-section">
          <h2>Personal Information</h2>
          <p>Email: {personal.email || "leechiahwa99@hotmail.com"}</p>
          <p>Phone: {personal.phone || "012-3456789"}</p>
          <p>Age: {personal.age || "25"} years old</p>
        </section>
        <div className="section-divider"></div>

        {/* Education Section */}
        <section className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>
              {education.courseName ||
                "Bachelor of Science in Computer Science"}
            </h3>
            <p>
              {education.schoolName || "University of California, Los Angeles"}
            </p>
            <p>
              {education.studyDateFrom || "2018"} -{" "}
              {education.studyDateTo || "2022"}
            </p>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* Work Section */}
        <section className="work-section">
          <h2>Work Experience</h2>
          <div className="work-item">
            <h3>{work.positionTitle || "Software Developer"}</h3>
            <p>{work.companyName || "Google"}</p>
            <p>
              {work.workDurationFrom || "2022"} -{" "}
              {work.workDurationTo || "2024"}
            </p>
            <p>
              Main Responsibility:{" "}
              {work.mainResponsibility ||
                "Developing and maintaining software applications"}
            </p>
          </div>
        </section>
      </div>
      <button
        onClick={handleDownloadPDF}
        style={{
          right: "0",
          top: "-40px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default Preview;
