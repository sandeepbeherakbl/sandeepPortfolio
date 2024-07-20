import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Home } from "./Pages/Home";
import { BottomBar } from "./Pages/BottomBar";
import { Topbar } from "./Pages/Topbar";
import { Contact } from "./Pages/Contact";
import { Experience } from "./Pages/Experience";
import { Project } from "./Pages/Project";
import { ProjectAbout } from "./Pages/ProjectAbout";
import "./Styles/Mobile.css"
import useViewportHeight from "../../hooks/useViewportHeight";
import PdfViewer from "./Pages/PdfViewer";

export const MobileMain = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useViewportHeight();

  return (
    <Router>
      <div className="main-component-div">
        <div className="mob-top-bar">
          <Topbar />
        </div>

        <div className="mob-body-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<PdfViewer />} />
            <Route
              path="/projects"
              element={
                selectedProject ? (
                  <ProjectAbout
                    project={selectedProject}
                    setSelectedProject={setSelectedProject}
                  />
                ) : (
                  <Project setSelectedProject={setSelectedProject} />
                )
              }
            />
          </Routes>
        </div>

        <div className="mob-bottom-bar">
          <BottomBar />
        </div>
      </div>
    </Router>
  );
};
