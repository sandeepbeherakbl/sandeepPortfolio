import { File, Code, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import projectsData from "../../../json/project.json";
import uiProjectsData from "../../../json/uiProjects.json";
import PropTypes from "prop-types";
import MobileUiProjectView from "./UiProjectView";

export const Project = ({ setSelectedProject }) => {
  const [activeTab, setActiveTab] = useState("ui");
  const [selectedUiProject, setSelectedUiProject] = useState(null);
  const [lastTab, setLastTab] = useState("ui");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setLastTab(tab);
  };

  const renderTabs = () => (
    <div className="mob-project-tabs-container">
      <button
        className={`mob-project-tab ${activeTab === "ui" ? "active" : ""}`}
        onClick={() => handleTabChange("ui")}
      >
        <Layout size={16} />
        <span>UI/UX Design</span>
      </button>
      <button
        className={`mob-project-tab ${activeTab === "dev" ? "active" : ""}`}
        onClick={() => handleTabChange("dev")}
      >
        <Code size={16} />
        <span>Development</span>
      </button>
    </div>
  );

  const handleBack = () => {
    setSelectedUiProject(null);
    setActiveTab(lastTab);
  };

  if (selectedUiProject) {
    return (
      <MobileUiProjectView
        project={selectedUiProject}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="mob-body-container-height">
      <div className="mob-project-main-head">
        <div className="mob-project-head-content">
          <div className="mob-project-page-head">
            <File width={30} height={30} />
            <h2>Project Portfolio</h2>
          </div>
        </div>
      </div>
      <div className="mob-tabs">{renderTabs()}</div>
      <div className="mob-project-cards-main">
        {activeTab === "ui" ? (
          <div className="mob-project-page">
            {uiProjectsData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="mob-project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedUiProject(project)}
              >
                <div className="mob-project-card-img">
                  <div className="mac-window-header">
                    <div className="window-buttons">
                      <div className="window-button close-btns"></div>
                      <div className="window-button minimize-btn"></div>
                      <div className="window-button maximize-btn"></div>
                    </div>
                  </div>
                  <div className="gradient-bg" />
                  <motion.h3>{project.name}</motion.h3>
                </div>
                <div className="mob-project-content">
                  <div className="mob-tech-stack">
                    <p>Tools Used</p>
                    <div className="tech-stack-container">
                      {project.tools.slice(0, 3).map((tool, i) => (
                        <span key={i} className="tech-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div className="mob-view-btn">
                    <button>View Details</button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mob-project-page">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="mob-project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="mob-project-card-img">
                  <div className="mac-window-header">
                    <div className="window-buttons">
                      <div className="window-button close-btns"></div>
                      <div className="window-button minimize-btn"></div>
                      <div className="window-button maximize-btn"></div>
                    </div>
                  </div>
                  <div className="gradient-bg" />
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                <div className="mob-project-content">
                  <div className="mob-tech-stack">
                    <p>Tech Stack</p>
                    <div className="tech-stack-container">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="mob-view-btn"
                    whileTap={{ scale: 0.95 }}
                  >
                    <button onClick={() => setSelectedProject(project)}>
                      View Details
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};

export default Project;
