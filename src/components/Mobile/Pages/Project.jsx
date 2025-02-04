import { File } from "lucide-react";
import { motion } from "framer-motion";
import projectsData from "../../../json/project.json";
import PropTypes from "prop-types";

export const Project = ({ setSelectedProject }) => {
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

      <div className="mob-project-cards-main">
        <div className="mob-project-page">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="mob-project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
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
      </div>
    </div>
  );
};

Project.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};
