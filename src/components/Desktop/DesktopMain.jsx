import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { Experience } from "./pages/Experience";
import { ProjectDetails } from "./pages/Projects/ProjectAbout";
import { ProjectPage } from "./pages/Projects/ProjectPage";
import { RightBar } from "./pages/RightBar";
import { useState } from "react";

export const DesktopMain = () => {
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
              <Route path="/experience" element={<Experience />} />
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
    </>
  );
};
