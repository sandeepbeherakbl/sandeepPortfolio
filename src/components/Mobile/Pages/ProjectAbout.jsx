import { CircleArrowLeft } from "lucide-react";

export const ProjectAbout = ({ project, setSelectedProject }) => {
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
            <h1>Title</h1>
            <p>subtitle</p>
          </div>
        </div>
      </div>
    </>
  );
};
