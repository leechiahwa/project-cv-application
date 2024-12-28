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
interface PreviewProps {
  personal: PersonalInfo;
  education: EducationInfo;
}

function Preview({ personal, education }: PreviewProps) {
  return (
    <div>
      Resume Preview
      <p>{personal.name}</p>
      <p>{personal.phone}</p>
      <p>{education.schoolName}</p>
    </div>
  );
}

export default Preview;
