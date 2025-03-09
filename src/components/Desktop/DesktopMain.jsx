import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { Experience } from "./pages/Experience";
import { ProjectDetails } from "./pages/Projects/ProjectAbout";
import { ProjectPage } from "./pages/Projects/ProjectPage";
import { RightBar } from "./pages/RightBar";
import { useState, Suspense } from "react";
import UiProjects from "./pages/Projects/UiProjects";
import UiProjectView from "./pages/Projects/UiProjectView";

export const DesktopMain = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const LoadingSpinner = () => (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );

  return (
    <div className="home_main">
      <div className="about-section">
        <About />
      </div>
      <div className="body-section">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/experience" element={<Experience />} />
            <Route
              path="/projects"
              element={<ProjectPage setSelectedProject={setSelectedProject} />}
            />
            <Route
              path="/:selectedProject"
              element={
                <ProjectDetails
                  project={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              }
            />

            <Route path="/projects/ui" element={<UiProjects />} />
            <Route path="/projects/ui/:id" element={<UiProjectView />} />

            {/* <Route
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
            /> */}
          </Routes>
        </Suspense>
      </div>
      <div className="sideBar-section">
        <RightBar />
      </div>
    </div>
  );
};
