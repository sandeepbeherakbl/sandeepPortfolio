import "../styles/Main.css";
import skillsData from "../../../json/skills.json";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  LucideFacebook,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import ResumePopup from "./ResumePopup";
import DateTimeCard from "./DateTime";
import { motion } from "framer-motion";

export const About = () => {
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openResumePopup = () => {
    setShowResumePopup(true);
  };

  const closeResumePopup = () => {
    setShowResumePopup(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  return (
    <div
      className={`about-mian-div ${showResumePopup ? "blurred" : ""} ${fadeIn ? "fade-in" : ""
        }`}
    >
      <div className="about-profile-section">
        <div className="about-profile-image">
          <div className="active-circle"></div>
        </div>
        <div className="about-container">
          <p className="sans-normal" style={{ fontSize: '24px' }}>Sandeep Kumar <span className="serif-italic" style={{ fontSize: '26px' }}>Behera</span></p>
          <div className="title-tag">
            <span className="role sans-normal">Full Stack & Generative AI <span className="serif-italic">Engineer</span></span>
          </div>
        </div>
        <div className="resume-download" onClick={openResumePopup}>
          {/* <div className="resume-flex-div">
            <p>Download Resume </p>
            <Download color="#ffffff" width={12} height={12} />
          </div> */}
        </div>
        {showResumePopup && <ResumePopup onClose={closeResumePopup} />}
      </div>

      <div className="DateTimeCard">
        <DateTimeCard />
      </div>

      <div className="main-skills-section">
        <div className="skills-list-premium">
          {Object.keys(skillsData).map((category) => (
            <div key={category} className="premium-skill-category">

              <div className="skill-category-header">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-category-line"></div>
              </div>
              <div className="premium-skill-sets">
                {skillsData[category].map((skill, index) => (
                  <div key={index} className="premium-skill-item" data-skill={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="social-main-div">
        <a href="https://github.com/sandeepbeherakbl" target="_blank">
          <Github
            color="#3f444d"
            width={25}
            height={25}
            className="social-icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/sandeep-kumar-behera-24051999/"
          target="_blank"
        >
          <Linkedin
            color="#3f444d"
            width={25}
            height={25}
            className="social-icon"
          />
        </a>

        <a href="mailto:sandeepbeherakbl@gmail.com">
          <Mail
            color="#3f444d"
            width={25}
            height={25}
            className="social-icon"
          />
        </a>

        <a
          href="https://www.facebook.com/sandeepkumar.behera.142?mibextid=ZbWKwL"
          target="_blank"
        >
          <LucideFacebook
            color="#3f444d"
            width={25}
            height={25}
            className="social-icon"
          />
        </a>

        <a href="https://www.instagram.com/_blue.beast_/" target="_blank">
          <Instagram
            color="#3f444d"
            width={25}
            height={25}
            className="social-icon"
          />
        </a>
      </div>
    </div>
  );
};
