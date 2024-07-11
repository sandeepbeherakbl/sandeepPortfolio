import { CircleArrowLeft } from "lucide-react";
import "./ProjectPage.css";
import PropTypes from "prop-types";

export const ProjectDetails = ({ project, setSelectedProject }) => {
  return (
    <>
      <div className="project-details-main">
        {/* head */}
        <div className="project-details-head">
          <button
            className="back-button"
            onClick={() => setSelectedProject(null)}
          >
            <CircleArrowLeft width={30} height={30} />
          </button>

          <div className="project-details-head-content">
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
        </div>

        {/* body */}
        <div className="project-body">
          <div className="project-body-content">
            <div className="project-body-about">
              <div className="About-container">
                About
                {/* {project.about.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))} */}
                <div className="about-div">
                  <p> {project.about}</p>
                </div>
              </div>
            </div>
            <div className="project-body-tech">
              <div className="tech-container">
                Tech Stack
                <div className="tech-div">
                  {project.techStack.map((detail, index) => (
                    <>
                      <p className="tech-p" key={index}>{detail}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="project-feature">
            <div className="feature-container">
              Features
              {project.details.map((detail, index) => (
                <p key={index}> - {detail}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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
