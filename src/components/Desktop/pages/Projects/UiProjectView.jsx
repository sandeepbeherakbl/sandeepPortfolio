import { ArrowLeft } from "lucide-react";
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
          <div className="absolute bottom-8 left-8 z-10">
            <h1 className="ui-project-name">{project.name}</h1>
            <p className="text-lg">{project.shortDescription}</p>
          </div>
          <img
            src={getProjectImage(project.imageFlag)}
            alt={project.name}
            className="ui-project-image"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="project-description">{project.longDescription}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="tools-section">
          <h3>Tools Used</h3>
          <div className="tools-list">
            {project.tools.map((tool) => (
              <span key={tool} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiProjectView;
