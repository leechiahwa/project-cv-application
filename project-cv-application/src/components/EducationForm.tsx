function EducationForm() {
  return (
    <>
      <label>
        School Name: <input type="text" />
        Course Name: <input type="text" />
        Date of Study: <input type="date" /> To <input type="date" />
      </label>
      <button className="btn btn-secondary">Edit</button>
      <button className="btn btn-primary">Submit</button>
    </>
  );
}

export default EducationForm;
