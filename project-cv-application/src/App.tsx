import { useState } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="container">
          <InfoForm />
        </div>
        <div>
          Test
        </div>
      </div>
    </>
  );
}

export default App;
