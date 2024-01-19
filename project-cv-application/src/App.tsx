import "./App.css";
import InfoForm from "./components/InfoForm";
import EducationDetails from "./components/EducationDetails";
import WorkDetails from "./components/WorkDetails";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="container">
          <InfoForm />
          <EducationDetails />
          <WorkDetails />
        </div>
      </div>
    </>
  );
}

export default App;
