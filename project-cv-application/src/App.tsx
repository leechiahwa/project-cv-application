import { useState } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm";
import CvPreview from "./components/CvPreview";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="container">
          <InfoForm />
        </div>
        <div>
          <CvPreview />
        </div>
      </div>
    </>
  );
}

export default App;
