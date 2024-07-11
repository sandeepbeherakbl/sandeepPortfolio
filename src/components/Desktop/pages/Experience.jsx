import "../styles/Experience.css";
import professionalExperience from "../../../json/exp.json";

export const Experience = () => {
  return (
    <>
      <div className="experience-div-main">
        {/* header */}
        <div className="exp-header-mian">
          <div className="exp-header-content">
            <h1>Professional Experience</h1>
          </div>
        </div>

        {/* body */}
        <div className="exp-body-main-div">
          <div className="body-container">
            {professionalExperience.professionalExperience.map(
              (experience, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div className="exp-company">
                      <h3>{experience.title}</h3>
                      <p>{experience.company}</p>
                    </div>
                    <div className="exp-location">
                      <p>{experience.duration}</p>
                      <p>{experience.location}</p>
                    </div>
                  </div>
                  <div className="experience-responsibilities">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <p key={idx}> - {responsibility}</p>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
