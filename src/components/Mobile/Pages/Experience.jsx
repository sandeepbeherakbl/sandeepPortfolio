import professionalExperience from "../../../json/exp.json";

export const Experience = () => {
  return (
    <>
      <div className="mob-body-container-height">
        <div className="mob-exp-header-mian">
          <div className="mob-exp-header-content">
            <h1>Professional Experience</h1>
          </div>
        </div>

        <div>
          <div className="mob-exp-body-main-div">
            <div className="mob-body-container">
              {professionalExperience.professionalExperience.map(
                (experience, index) => (
                  <div key={index} className="mob-experience-card">
                    <div className="mob-experience-header">
                      <div className="mob-exp-company">
                        <h3>{experience.title}</h3>
                        <p>{experience.company}</p>
                      </div>
                      <div className="mob-exp-location">
                        <p>{experience.duration}</p>
                        <p>{experience.location}</p>
                      </div>
                    </div>
                    <div className="mob-experience-responsibilities">
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <p key={idx}> - {responsibility}</p>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
