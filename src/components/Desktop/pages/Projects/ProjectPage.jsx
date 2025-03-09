import { FileCode, Palette } from "lucide-react";
import projectsData from "../../../../json/project.json";
import "./ProjectPage.css";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import MacBook from "./MacBook";
import { useNavigate, useSearchParams } from "react-router-dom";
import UiProjects from "./UiProjects";

export const ProjectPage = ({ setSelectedProject }) => {
  const [searchParams] = useSearchParams();
  const [isLaptopOpen, setIsLaptopOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || "ui");
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    const projectWithCategory = {
      ...project,
      category: activeTab // Add the current tab as category
    };
    setSelectedProjectData(projectWithCategory);
    setIsLaptopOpen(true);
    setTimeout(() => {
      setSelectedProject(projectWithCategory);
      navigate(`/${project.title}`);
    }, 5000);
  };

  const handleClose = () => {
    setIsLaptopOpen(false);
    setTimeout(() => {
      setSelectedProjectData(null);
    }, 500);
  };

  const getHeaderContent = () => {
    return activeTab === 'ui' ? {
      icon: <Palette width={50} height={50} color="#ffffff" />,
      title: "UI Artistry",
      description: [
        "Explore my UI/UX design portfolio showcasing creative and intuitive interfaces.",
        "Each design tells a unique story of user-centered experiences and visual innovation."
      ]
    } : {
      icon: <FileCode width={50} height={50} color="#ffffff" />,
      title: "Code Ventures",
      description: [
        "Explore a gallery of my projects, each reflecting my dedication and skill.",
        "Delve into my body of work, where each project is a unique digital journey."
      ]
    };
  };

  const headerContent = getHeaderContent();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/projects?tab=${tab}`);
  };

  return (
    <div className="project-main-div">
      <div className="project-main-head">
        <div className="project-head-content">
          <div className="project-page-head">
            {headerContent.icon}
            <h2>{headerContent.title}</h2>
          </div>
          <p className="project-p-tag">
            <Typewriter
              options={{
                strings: headerContent.description,
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </p>
        </div>
      </div>
      
      <div className="project-tabs">
        <button 
          className={`tab-button ${activeTab === 'ui' ? 'active' : ''}`}
          onClick={() => handleTabClick('ui')}
        >
          <Palette width={20} height={20} />
          <span>UI Artistry</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'dev' ? 'active' : ''}`}
          onClick={() => handleTabClick('dev')}
        >
          <FileCode width={20} height={20} />
          <span>Code Ventures</span>
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'ui' ? (
          <UiProjects />
        ) : (
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
        )}
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
