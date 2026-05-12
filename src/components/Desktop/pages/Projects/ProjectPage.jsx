import { FileCode, Palette, BrainCircuit } from "lucide-react";
import projectsData from "../../../../json/project.json";
import aiProjectsData from "../../../../json/Aiproject.json";
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
    if (activeTab === 'ui') {
      return {
        icon: <Palette width={50} height={50} color="#ffffff" />,
        title: "UI Artistry",
        description: [
          "Explore my UI/UX design portfolio showcasing creative and intuitive interfaces.",
          "Each design tells a unique story of user-centered experiences and visual innovation."
        ]
      };
    } else if (activeTab === 'ai') {
      return {
        icon: <BrainCircuit width={50} height={50} color="#ffffff" />,
        title: "AI Innovations",
        description: [
          "Discover my cutting-edge AI projects and generative solutions.",
          "Exploring the boundaries of artificial intelligence and machine learning."
        ]
      };
    } else {
      return {
        icon: <FileCode width={50} height={50} color="#ffffff" />,
        title: "Code Ventures",
        description: [
          "Explore a gallery of my projects, each reflecting my dedication and skill.",
          "Delve into my body of work, where each project is a unique digital journey."
        ]
      };
    }
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
          className={`tab-button ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => handleTabClick('ai')}
        >
          <BrainCircuit width={20} height={20} />
          <span>AI Innovations</span>
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
        ) : activeTab === 'ai' ? (
          <div className="premium-project-grid">
            {aiProjectsData.map((project, index) => (
              <div key={index} className="premium-project-card">
                <div className="premium-card-bg"></div>
                <div className="premium-card-content">
                  <div className="premium-card-header">
                    <div className="premium-icon-box">
                      <BrainCircuit size={24} color="#b18bff" />
                    </div>
                    <h3 className="premium-title">{project.title}</h3>
                  </div>
                  <p className="premium-subtitle">{project.subtitle}</p>
                  <div className="premium-tech-container">
                    <span className="premium-tech-label">Technologies</span>
                    <div className="premium-tech-list">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="premium-tech-tag">{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="premium-tech-tag more">+{project.techStack.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="premium-card-footer">
                  <button className="premium-view-btn" onClick={() => handleProjectClick(project)}>
                    View Project <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="premium-project-grid">
            {projectsData.map((project, index) => (
              <div key={index} className="premium-project-card">
                <div className="premium-card-bg"></div>
                <div className="premium-card-content">
                  <div className="premium-card-header">
                    <div className="premium-icon-box">
                      <FileCode size={24} color="#b18bff" />
                    </div>
                    <h3 className="premium-title">{project.title}</h3>
                  </div>
                  <p className="premium-subtitle">{project.subtitle}</p>
                  <div className="premium-tech-container">
                    <span className="premium-tech-label">Technologies</span>
                    <div className="premium-tech-list">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="premium-tech-tag">{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="premium-tech-tag more">+{project.techStack.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="premium-card-footer">
                  <button className="premium-view-btn" onClick={() => handleProjectClick(project)}>
                    View Project <span className="arrow">→</span>
                  </button>
                </div>
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
