import { ArrowLeft, Smartphone, MonitorIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../../../../json/uiProjects.json";
import instablood from "../../../../assets/uiImage/instablood.svg";
import teltoApp from "../../../../assets/uiImage/teltoApp.svg";
import teltoWeb from "../../../../assets/uiImage/teltoWeb.svg";
import gdc from "../../../../assets/uiImage/gdc.svg";
import hwm from "../../../../assets/uiImage/HMS.svg";
import invWeb from "../../../../assets/uiImage/invincixWeb.svg";
import ajileApp from "../../../../assets/uiImage/agileapp.svg";
import ajileWeb from "../../../../assets/uiImage/agileWeb.svg";

const UiProjectView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projectsData.projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  const getProjectImage = (imageFlag) => {
    switch (imageFlag) {
      case "instablood":
        return instablood;
      case "gdcmap":
        return gdc;
      case "invincix":
        return invWeb;
      case "ajileweb":
        return ajileWeb;
      case "ajilemobile":
        return ajileApp;
      case "teltoweb":
        return teltoWeb;
      case "teltoapp":
        return teltoApp;
      case "hwms":
        return hwm;
      default:
        return gdc;
    }
  };

  return (
    <div className="project-view-container">
      <div className="project-view-header">
        <button
          className="ui-back-button"
          onClick={() => navigate("/projects")}
        >
          <ArrowLeft /> Back
        </button>
      </div>

      <div className="ui-project-content">
        <div className="relative">
          <div className="ui-project-info">
            <div className="ui-project-title">
              <h1 className="ui-project-name">{project.name}</h1>
              <p className="text-lg">{project.shortDescription}</p>
            </div>
            <div className="project-type">
              {project.type === "web" ? (
                <button className="application-type-btn">
                  <MonitorIcon
                    size={24}
                    style={{
                      marginRight: "0.5rem",
                    }}
                  />
                  <span>Web Application</span>
                </button>
              ) : (
                <button className="application-type-btn">
                  <Smartphone
                    size={24}
                    style={{
                      marginRight: "0.5rem",
                    }}
                  />
                  <span>Mobile Application</span>
                </button>
              )}
            </div>
          </div>
{/*           <img
            src={getProjectImage(project.imageFlag)}
            alt={project.name}
            className="ui-project-image"
          /> */}
        </div>

        <div className="mt-8 project-bg">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="project-description">{project.longDescription}</p>
        </div>

        <div className="mt-8 project-bg">
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <p className="project-description">{project.requirements}</p>
        </div>

        <div className="mt-8 project-bg">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="tools-section">
          <h3>Tools Used</h3>
          <div className="tools-list">
            {project.tools.map((tool) => (
              <span key={tool} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div> */}

        <div className="nda-section">
          <p>
            Note: Due to a Non-Disclosure Agreement (NDA), I can only share
            limited details about this project. However, I am happy to discuss
            my role, the project's outcomes, and showcase related work upon
            request. Please feel free to contact me for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UiProjectView;
