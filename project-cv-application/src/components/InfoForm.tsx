function InfoForm() {
    return (
        <>
        <label>
            Name: <input type="name" />
            Email: <input type="email" />
            Age: <input type="number" />
            Phone: <input type="tel" />
        </label>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-primary">Submit</button>
        </>
    );
}

export default InfoForm;