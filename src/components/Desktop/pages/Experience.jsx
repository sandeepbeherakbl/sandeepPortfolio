import "../styles/Experience.css";
import professionalExperience from "../../../json/exp.json";
import { motion, AnimatePresence } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";

export const Experience = () => {
  return (
    <div className="experience-div-main">
      <motion.div 
        className="exp-header-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="sans-normal"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional <span className="serif-italic">Experience</span>
        </motion.h1>
      </motion.div>

      <div className="exp-body-main-div">
        <div className="timeline-track"></div>
        <div className="body-container">
          <AnimatePresence>
            {professionalExperience.professionalExperience.map((experience, index) => (
              <motion.div 
                key={index} 
                className="experience-card premium-exp-card"
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 70
                }}
              >
                <div className="timeline-dot"></div>
                <div className="company-watermark">{experience.company}</div>

                <div className="premium-exp-layout">
                  <div className="exp-left-column">
                    <div className="exp-role-header">
                      <motion.div
                        className="exp-icon-container"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <BsBriefcase className="exp-icon-lux" />
                      </motion.div>
                      <div className="exp-role-titles">
                        <h3 className="exp-role">{experience.title}</h3>
                        <h4 className="exp-company-name-lux">
                          <span className="italic-text">at</span> {experience.company}
                        </h4>
                      </div>
                    </div>
                    <div className="exp-meta-badges">
                      <motion.div 
                        className="exp-badge"
                        whileHover={{ x: 5, backgroundColor: "rgba(120, 63, 239, 0.2)" }}
                      >
                        <BiTime /> <span>{experience.duration}</span>
                      </motion.div>
                      <motion.div 
                        className="exp-badge"
                        whileHover={{ x: 5, backgroundColor: "rgba(120, 63, 239, 0.2)" }}
                      >
                        <HiOutlineLocationMarker /> <span>{experience.location}</span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="exp-divider"></div>

                  <div className="exp-right-column">
                    <div className="exp-responsibilities-list">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.div 
                          key={idx}
                          className="exp-resp-item"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.15 + idx * 0.1 }}
                          whileHover={{ x: 5 }}
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
