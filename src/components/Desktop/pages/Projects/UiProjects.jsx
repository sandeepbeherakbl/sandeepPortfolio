import { Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectsData from "../../../../json/uiProjects.json";
import { motion } from "framer-motion";

const UiProjects = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="project-grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projectsData.projects.map((project) => (
        <motion.div
          key={project.id}
          className="project-item"
          variants={item}
          whileHover={{ 
            translateY: -8,
            transition: { duration: 0.2 }
          }}
          whileTap={{ translateY: -2 }}
        >
          <div className="project-content-wrapper">
            <div className="project-header">
              <h3 className="project-title">
                <span><Palette color="#783fef"/></span> 
                {project.name}
              </h3>
              <p className="project-subtitle">{project.shortDescription}</p>
            </div>
            <div className="tech-stack-wrapper">
              <div className="tech-stack-title">Tools Used</div>
              <div className="project-tech">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tech-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            className="view-btn"
            onClick={() => navigate(`/projects/ui/${project.id}`)}
          >
            View Project
            <span className="arrow">→</span>
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UiProjects;
