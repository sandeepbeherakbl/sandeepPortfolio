import "../styles/Main.css";
// import dummyImg from "../../assets/DummyImg.png";
// import propic from "../../assets/propic.png";
import skillsData from "../../../json/skills.json";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  LucideFacebook,
  Mail,
} from "lucide-react";
import { useState } from "react";
import ResumePopup from "./ResumePopup";

export const About = () => {
  const [showResumePopup, setShowResumePopup] = useState(false);

  const openResumePopup = () => {
    setShowResumePopup(true);
  };

  const closeResumePopup = () => {
    setShowResumePopup(false);
  };
  return (
    <>
      <div className={`about-mian-div ${showResumePopup ? "blurred" : ""}`}>
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
          <div className="resume-download" onClick={openResumePopup}>
            <div className="resume-flex-div">
              <p>Download Resume </p>
              <Download color="#783FEF" width={12} height={12} />
            </div>
          </div>
          {showResumePopup && <ResumePopup onClose={closeResumePopup} />}
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
          <a href="https://github.com/sandeepbeherakbl" target="_blank">
            <Github
              color="#3f444d"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sandeep-kumar-behera-24051999/"
            target="_blank"
          >
            <Linkedin
              color="#3f444d"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>

          <a href="mailto:sandeepbeherakbl@gmail.com">
            <Mail
              color="#3f444d"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>

          <a
            href="https://www.facebook.com/sandeepkumar.behera.142?mibextid=ZbWKwL"
            target="_blank"
          >
            <LucideFacebook
              color="#3f444d"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>

          <a href="https://www.instagram.com/_blue.beast_/" target="_blank">
            <Instagram
              color="#3f444d"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};
