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
      className="premium-project-grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projectsData.projects.map((project) => (
        <motion.div
          key={project.id}
          className="premium-project-card"
          variants={item}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="premium-card-bg"></div>
          <div className="premium-card-content">
            <div className="premium-card-header">
              <div className="premium-icon-box">
                <Palette size={24} color="#b18bff" />
              </div>
              <h3 className="premium-title">{project.name}</h3>
            </div>
            <p className="premium-subtitle">{project.shortDescription}</p>
            
            <div className="premium-tech-container">
              <span className="premium-tech-label">Tools Used</span>
              <div className="premium-tech-list">
                {project.tools.slice(0, 4).map((tool, i) => (
                  <span key={i} className="premium-tech-tag">
                    {tool}
                  </span>
                ))}
                {project.tools.length > 4 && (
                  <span className="premium-tech-tag more">+{project.tools.length - 4}</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="premium-card-footer">
            <button
              className="premium-view-btn"
              onClick={() => navigate(`/projects/ui/${project.id}`)}
            >
              View Project
              <span className="arrow">→</span>
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UiProjects;
