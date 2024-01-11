function WorkForm() {
  return (
    <>
      <label>
        Company Name: <input type="text" />
        Position Title: <input type="text" />
        Main Responsibility: <input type="text" />
        Work Duration: <input type="date" /> to <input type="date" />
      </label>
      <button className="btn btn-secondary">Edit</button>
      <button className="btn btn-primary">Submit</button>
    </>
  );
}

export default WorkForm;