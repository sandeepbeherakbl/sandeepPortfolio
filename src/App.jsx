import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/pages/About";
import { Dashboard } from "./components/pages/Dashboard";
import { RightBar } from "./components/pages/RightBar";
import { ProjectDetails } from "./components/pages/Projects/ProjectAbout";
import { ProjectPage } from "./components/pages/Projects/ProjectPage";
import { Experience } from "./components/pages/Experience";

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
              <Route path="/" Component={<Dashboard />} />
              <Route path="/experience" Component={<Experience />} />
              <Route
                path="/projects"
                Component={
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
    </>
  );
}

export default App;
