import { CircleArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import { Modal } from "../components/Modal";
import { useState } from "react";

export const ProjectAbout = ({ project, setSelectedProject }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <div className="mob-body-container-height">
        <div className="mob-project-details-head">
          <button
            className="mob-back-button"
            onClick={() => setSelectedProject(null)}
          >
            <CircleArrowLeft width={30} height={30} />
          </button>

          <div className="mob-project-details-head-content">
            <h1>{project.title}</h1>
          </div>
        </div>

        {/* body */}

        <div className="mob-project-body-container">
          <div className="mob-project-sub">
            <p>{project.subtitle}</p>
          </div>

          <div className="mob-project-about-body">
            <div className="mob-project-about-body-sub">
              <div className="mob-project-about">
                <h4>About</h4>
                {/* <p> {project.about}</p> */}
                <p>
                  {project.about.slice(0, 250)}
                  <span className="more-text">.....</span>
                  <button onClick={handleModalOpen} className="view-more-btn">
                    View More
                  </button>
                </p>
              </div>

              <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <h4>About</h4>
                <p>{project.about}</p>
              </Modal>

              <div className="mob-project-tech-stack">
                {project.techStack.map((detail, index) => (
                  <>
                    <p className="mob-tech-p" key={index}>
                      {detail}
                    </p>
                  </>
                ))}
              </div>

              <div className="mob-project-features">
                <h4>Feaatures</h4>
                {project.details.map((detail, index) => (
                  <p key={index}> - {detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectAbout.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};
