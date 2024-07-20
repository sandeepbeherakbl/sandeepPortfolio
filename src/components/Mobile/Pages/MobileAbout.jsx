import skills from "../../../json/mobileSkills.json";

export const MobileAbout = () => {
  return (
    <>
      <div className="mob-about-div">
        <div className="mob-about-main-container">
          <div className="mob-about-container">
            <div>
              <p>Sandeep Kumar Behera</p>
              <p>Frontend Developer</p>
            </div>
          </div>

          {/* skills cards */}
          <div className="mob-skills-div">
            {skills.skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
