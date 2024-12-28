interface PersonalInfo {
  name: string;
  email: string;
  age: number;
  phone: string;
}

function Preview({ personal }: { personal: PersonalInfo }) {
  return (
    <div>
      Resume Preview
      <p>{personal.name}</p>
      <p>{personal.phone}</p>
    </div>
  );
}

export default Preview;
