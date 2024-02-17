import "./App.css";
import InfoForm from "./components/InfoForm";
import EducationDetails from "./components/EducationDetails";
import WorkDetails from "./components/WorkDetails";
import CvPreview from "./components/CvPreview";
function App() {
  return (
    <>
        <div className="d-flex">
          <div className="container">
            <InfoForm />
            <EducationDetails />
            <WorkDetails />
          </div>
          {/*<CvPreview />*/}
        </div>
    </>
  );
}

export default App;
