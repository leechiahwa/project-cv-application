import { useState } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="container">
          <InfoForm />
          <EducationForm />
          <WorkForm />
        </div>
        <div>
          Test
        </div>
      </div>
    </>
  );
}

export default App;
