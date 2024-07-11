import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/Desktop/pages/About";
import { Dashboard } from "./components/Desktop/pages/Dashboard";
import { RightBar } from "./components/Desktop/pages/RightBar";
import { ProjectDetails } from "./components/Desktop/pages/Projects/ProjectAbout";
import { ProjectPage } from "./components/Desktop/pages/Projects/ProjectPage";
import { Experience } from "./components/Desktop/pages/Experience";
// import { MobileMain } from "./components/Mobile/MobileMain";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Router>
        <div className="home_main">
          <div className="about-section">
            <About />
          </div>

          <div className="body-section">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/experience" element={<Experience/>}  />
              <Route
                path="/projects"
                element={
                  selectedProject ? (
                    <ProjectDetails
                      project={selectedProject}
                      setSelectedProject={setSelectedProject}
                    />
                  ) : (
                    <ProjectPage setSelectedProject={setSelectedProject} />
                  )
                }
              />
            </Routes>
          </div>

          <div className="sideBar-section">
            <RightBar />
          </div>
        </div>
      </Router>

      {/* <MobileMain/> */}
    </>
  );
}

export default App;
