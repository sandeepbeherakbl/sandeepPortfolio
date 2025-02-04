import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export const Dashboard = () => {
  const startingDate = new Date(2022, 6);
  const currentDate = new Date();

  // Calculate total months of experience
  let totalMonths =
    (currentDate.getFullYear() - startingDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startingDate.getMonth();

  // Include the current month if we're in or after the starting month
  totalMonths += 1;

  // Convert months to years with decimal points
  const yearsOfExperience = (totalMonths / 12).toFixed(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="dashboard-main-div">
      {/* header */}
      <div className="dash-header-section">
        <div className="dash-header-content">
          <h1>
            Crafting Code with a Designer&apos;s Touch: Full Stack Developer &
            Design Enthusiast.
          </h1>
          <p>
            <Typewriter
              options={{
                strings: [
                  "Fusing innovative design with solid development to bring digital visions to life.",
                  "Delivering robust and aesthetically pleasing web solutions from concept to completion.",
                  "Transforming ideas into visually stunning, high-performing web applications.",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </p>
        </div>
      </div>

      <motion.div 
        className="intro-main-div"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="intro-background-effects">
          <motion.div 
            className="glow-effect"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="intro-content-wrapper">
          <motion.div 
            className="intro-heading"
            variants={itemVariants}
          >
            <h2 className="digital-text">My Digital Journey</h2>
            <p className="subtitle">Empowering Innovation as a JavaScript Developer</p>
            <motion.div 
              className="experience-badge"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {yearsOfExperience} Years of Expertise
            </motion.div>
          </motion.div>

          <motion.div 
            className="intro-content"
            variants={itemVariants}
          >
            <p>Dive into the world of seamless digital experiences with a
              dedicated JavaScript Developer armed with {yearsOfExperience}{" "}
              years of hands-on expertise. From mastering ES6 and React to
              integrating cutting-edge platforms via REST and GIT, I thrive on
              transforming designs into pixel-perfect HTML and Sass/CSS
              creations. With a passion for server technologies like NPM, I
              collaborate closely with UX and Visual Designers, sculpting
              reliable features that elevate user interactions. My journey is
              defined by a relentless pursuit of innovation, leveraging
              technology to drive impactful solutions that shape the future of
              digital experiences. Let&apos;s innovate together to power your
              next-generation customer interactions and exceed expectations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
