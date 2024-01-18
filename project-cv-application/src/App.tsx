import "./App.css";
import InfoForm from "./components/InfoForm";
import EducationDetails from "./components/EducationDetails";
import WorkDetails from "./components/WorkDetails";

function App() {
  return (
    <>
      <div className="d-flex">
        <InfoForm />
        <EducationDetails />
        <WorkDetails />
      </div>
    </>
  );
}

export default App;
