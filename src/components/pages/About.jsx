import "../styles/Main.css";
// import dummyImg from "../../assets/DummyImg.png";
// import propic from "../../assets/propic.png";
import skillsData from "../../json/skills.json";
import {
  Circle,
  Github,
  Instagram,
  Linkedin,
  LucideFacebook,
  Mail,
} from "lucide-react";

export const About = () => {
  return (
    <>
      <div className="about-mian-div">
        {/*  heading section*/}
        <div className="about-profile-section">
          <div className="about-profile-image">
            {/* <img src={propic} alt="" /> */}
            <div className="active-circle"></div>
          </div>
          <div className="about-container">
            <p>Sandeep Kumar Behera</p>
            <p>Frontend Developer</p>
          </div>
        </div>

        {/* skills section */}
        <div className="main-skills-section">
          {/* <p className="skills-title">Skills</p> */}

          <div className="skills-list">
            {Object.keys(skillsData).map((category) => (
              <>
                <div key={category} className="skill-category">
                  <p>{category}</p>
                  <div className="skill-sets">
                    {skillsData[category].map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* social */}
        <div className="social-main-div">
          <Github color="#3f444d" width={30} height={30} />

          <Linkedin color="#3f444d" width={30} height={30} />

          <Mail color="#3f444d" width={30} height={30} />

          <LucideFacebook color="#3f444d" width={30} height={30} />

          <Instagram color="#3f444d" width={30} height={30} />

        </div>
      </div>
    </>
  );
};
