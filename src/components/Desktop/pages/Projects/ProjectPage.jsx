import { File, ArrowRight, FileCode } from "lucide-react";
import projectsData from "../../../../json/project.json";
import "./ProjectPage.css";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import MacBook from "./MacBook";
import { useNavigate } from "react-router-dom";

export const ProjectPage = ({ setSelectedProject }) => {
  const [isLaptopOpen, setIsLaptopOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    // console.log({project})
    setSelectedProjectData(project);
    setIsLaptopOpen(true);
    setTimeout(() => {
      setSelectedProject(project);
      navigate(`/${project.title}`);
    }, 5000);
  };

  const handleClose = () => {
    setIsLaptopOpen(false);
    setTimeout(() => {
      setSelectedProjectData(null);
    }, 500);
  };

  return (
    <div className="project-main-div">
      <div className="project-main-head">
        <div className="project-head-content">
          <div className="project-page-head">
            <File width={50} height={50} />
            <h2>Project Portfolio</h2>
          </div>
          <p className="project-p-tag">
            <Typewriter
              options={{
                strings: [
                  "Explore a gallery of my projects, each reflecting my dedication and skill.",
                  "Delve into my body of work, where each project is a unique digital journey.",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </p>
        </div>
      </div>

      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-content-wrapper">
              <div className="project-header">
                <h3 className="project-title"> <span><FileCode color="#783fef"/> </span> {project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <div className="tech-stack-wrapper">
                <div className="tech-stack-title">Technologies</div>
                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="view-btn"
              onClick={() => handleProjectClick(project)}
            >
              View Project 
              {/* <ArrowRight size={16} /> */}
              <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>

      <MacBook isOpen={isLaptopOpen} onClose={handleClose}>
        {selectedProjectData && (
          <div className="project-details">
            <h2>{selectedProjectData.title}</h2>
            <div className="project-info">
              <p>{selectedProjectData.description}</p>
              <div className="project-links">
                {selectedProjectData.liveLink && (
                  <a
                    href={selectedProjectData.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                )}
                {selectedProjectData.githubLink && (
                  <a
                    href={selectedProjectData.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </MacBook>
    </div>
  );
};

ProjectPage.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};
