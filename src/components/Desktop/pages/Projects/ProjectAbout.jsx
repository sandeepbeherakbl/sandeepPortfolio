import { CircleArrowLeft, Info, Code, Layers } from "lucide-react";
import "./ProjectPage.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ProjectDetails = ({ project, setSelectedProject }) => {
  const navigate = useNavigate();

  return (
    <div className="project-details-main">
      {/* head */}
      <div className="project-details-head">
        <button
          className="back-button"
          onClick={() => {
            navigate(`/projects`);
          }}
        >
          <CircleArrowLeft width={30} height={30} />
        </button>

        <div className="project-details-head-content">
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </div>
      </div>

      <div className="project-body">
        <div className="project-body-content">
          {/* About Section */}
          <div className="project-body-about">
            <div className="About-container">
              <div className="about-header">
                <Info size={20} color="#783fef" />
                <h3>About</h3>
              </div>
              <div className="about-div">
                <p>{project.about}</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="project-body-tech">
            <div className="tech-container">
              <div className="tech-header">
                <Code size={20} color="#783fef" />
                <h3>Tech Stack</h3>
              </div>
              <div className="tech-div">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-p">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="project-feature">
            <div className="feature-container">
              <div className="feature-header">
                <Layers size={20} color="#783fef" />
                <h3>Features</h3>
              </div>
              <div className="feature-list">
                {project.details.map((detail, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-bullet">•</span>
                    <p className="feature-text">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};
