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
    <div>
      Resume Preview
      <p>{personal.name}</p>
      <p>{personal.phone}</p>
      <p>{education.schoolName}</p>
      <p>{work.companyName}</p>
    </div>
  );
}

export default Preview;
