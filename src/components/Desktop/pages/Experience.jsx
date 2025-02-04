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
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -2 }}
            >
              <div className="exp-header-wrapper">
                <div className="exp-title-section">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <BsBriefcase className="exp-icon" />
                  </motion.div>
                  <div>
                    <h3>{experience.title}</h3>
                    <p className="company-name">{experience.company}</p>
                  </div>
                </div>
                <div className="exp-meta-info">
                  <motion.span 
                    className="duration"
                    whileHover={{ x: -5 }}
                  >
                    <BiTime /> {experience.duration}
                  </motion.span>
                  <motion.span 
                    className="location"
                    whileHover={{ x: -5 }}
                  >
                    <HiOutlineLocationMarker /> {experience.location}
                  </motion.span>
                </div>
              </div>
              
              <motion.div 
                className="exp-responsibilities"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {experience.responsibilities.map((responsibility, idx) => (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    <span className="bullet">•</span>
                    {responsibility}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
