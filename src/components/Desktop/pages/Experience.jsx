import "../styles/Experience.css";
import professionalExperience from "../../../json/exp.json";
import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";

export const Experience = () => {
  return (
    <div className="experience-div-main">
      <div className="exp-header-content">
        <h1>Professional Experience</h1>
      </div>

      <div className="exp-body-main-div">
        <div className="body-container">
          {professionalExperience.professionalExperience.map((experience, index) => (
            <motion.div 
              key={index} 
              className="experience-card premium-exp-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="company-watermark">{experience.company}</div>
              <div className="exp-card-glow"></div>

              <div className="premium-exp-layout">
                <div className="exp-left-column">
                  <div className="exp-role-header">
                    <motion.div
                      className="exp-icon-container"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <BsBriefcase className="exp-icon-lux" />
                    </motion.div>
                    <div className="exp-role-titles">
                      <h3 className="exp-role">{experience.title}</h3>
                      <h4 className="exp-company-name-lux">{experience.company}</h4>
                    </div>
                  </div>
                  <div className="exp-meta-badges">
                    <div className="exp-badge">
                      <BiTime /> <span>{experience.duration}</span>
                    </div>
                    <div className="exp-badge">
                      <HiOutlineLocationMarker /> <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="exp-divider"></div>

                <div className="exp-right-column">
                  <div className="exp-responsibilities-list">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.div 
                        key={idx}
                        className="exp-resp-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <div className="exp-bullet-lux"></div>
                        <p>{responsibility}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
