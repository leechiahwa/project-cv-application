import { useState } from "react";
import { Fragment } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";

function App() {
  return (
    <>
      <InfoForm />
      <EducationForm />
      <WorkForm />
    </>
  );
}

export default App;
