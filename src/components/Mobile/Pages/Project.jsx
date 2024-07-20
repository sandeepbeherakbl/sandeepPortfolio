import { File } from "lucide-react";
import projectsData from "../../../json/project.json";
import PropTypes from "prop-types";

export const Project = ({ setSelectedProject }) => {
  return (
    <>
      <div className="mob-body-container-height">
        {/* header */}

        <div className="mob-project-main-head">
          <div className="mob-project-head-content">
            <div className="mob-project-page-head">
              <File width={30} height={30} />
              <h2>Project Portfolio</h2>
            </div>
            <p className="project-p-tag"></p>
          </div>
        </div>

        {/* cards */}
        <div className="mob-project-cards-main">
          <div className="mob-project-page">
            {projectsData.map((project, index) => (
              <div key={index} className="mob-project-card">
                <div className="mob-project-card-img">
                  <h3>{project.title}</h3>
                </div>
                <div className="mob-project-content">
                  <div className="mob-tech-stack">
                    <p>TechStack Used</p>
                    <p>{project.techStack.join(" | ")}</p>
                  </div>
                  <div className="mob-view-btn">
                    <button onClick={() => setSelectedProject(project)}>
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Project.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};
