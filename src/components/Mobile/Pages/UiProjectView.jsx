import { ArrowLeft, Globe, Smartphone } from "lucide-react";
import PropTypes from "prop-types";
// import projectsData from "../../../json/uiProjects.json";
import instablood from "../../../assets/uiImage/instablood.svg";
import teltoApp from "../../../assets/uiImage/teltoApp.svg";
import teltoWeb from "../../../assets/uiImage/teltoWeb.svg";
import gdc from "../../../assets/uiImage/gdc.svg";
import hwm from "../../../assets/uiImage/HMS.svg";
import invWeb from "../../../assets/uiImage/invincixWeb.svg";
import ajileApp from "../../../assets/uiImage/agileapp.svg";
import ajileWeb from "../../../assets/uiImage/agileWeb.svg";
import "../Styles/Mobile.css"

const MobileUiProjectView = ({ project, onBack }) => {
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
    <div className="mob-body-container-height container-height">
      <div className="mob-ui-project-container">
        <div className="mob-ui-header">
          <button className="mob-ui-back-btn" onClick={onBack}>
            <ArrowLeft size={18} /> Back
          </button>

          <div className=" mob-project-bg">
            <h1 className="mob-ui-project-title">{project.name}</h1>
            <p className="mob-ui-project-desc">{project.shortDescription}</p>
            {project.type === "web" ? (
              <div className="mob-ui-type-badge web">
                <Globe size={16} />
                <span>Web Application</span>
              </div>
            ) : (
              <div className="mob-ui-type-badge mobile">
                <Smartphone size={16} />
                <span>Mobile Application</span>
              </div>
            )}
          </div>
        </div>

        <div className="mob-ui-image-wrapper">
          <img
            src={getProjectImage(project.imageFlag)}
            alt={project.name}
            className="mob-ui-project-image"
          />
          <div className="mob-ui-image-overlay" />
        </div>

        <div className="mob-ui-content mob-project-bg">
          <div className="mob-ui-section">
            <h2 className="mob-ui-section-title">Requirements</h2>
            <p className="mob-ui-text">{project.requirements}</p>
          </div>

          <div className="mob-ui-section">
            <h2 className="mob-ui-section-title">Features</h2>
            <ul className="mob-ui-features-list">
              {project.features.map((feature, index) => (
                <li key={index} className="mob-ui-feature-item">
                  <span className="mob-ui-bullet" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mob-ui-section">
            <h2 className="mob-ui-section-title">Tools Used</h2>
            <div className="mob-ui-tools-grid">
              {project.tools.map((tool) => (
                <span key={tool} className="mob-ui-tool-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mob-ui-nda-notice">
            <p>
              Note: Due to NDA restrictions, limited project details are shown.
              Contact me for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileUiProjectView.propTypes = {
  project: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default MobileUiProjectView;
