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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="dashboard-main-div">
      {/* header */}
      <div className="dash-header-section">
        <div className="dash-header-content">
          <h1 className="sans-normal">
            Building Intelligent Systems: <br/>Full Stack & Generative AI <span className="serif-italic">Engineer</span>
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

        <div className="intro-content-wrapper">
          <motion.div className="intro-heading" variants={itemVariants}>
            <h2 className="digital-text sans-normal">My Digital <span className="serif-italic">Journey</span></h2>
            <p className="subtitle">
              Empowering Innovation as a Full Stack & Generative AI Engineer
            </p>
          </motion.div>

          <motion.div className="intro-content" variants={itemVariants}>
            <p>
              I’m a Full Stack & Generative AI Engineer with {yearsOfExperience}+ years of experience building scalable web applications, AI-powered systems, and modern digital experiences. My expertise lies in React.js, Next.js, React Native, Python (FastAPI), Node.js, REST APIs, and cloud-integrated AI technologies, with a strong focus on performance, scalability, and user experience.
            </p>
            <p>
              I enjoy transforming complex ideas into clean, intuitive, and impactful digital products. From responsive frontend interfaces to scalable backend architectures and intelligent AI workflows, I love building solutions that solve real-world problems and create meaningful user experiences.
            </p>
            <p>
              My journey in tech has evolved from frontend engineering and UI-focused development to building intelligent systems powered by LLMs, conversational AI, and automation workflows. I’m passionate about combining modern software engineering with Generative AI to create smarter and more efficient digital platforms.
            </p>
            <p>
              I believe in continuous learning, clean architecture, and building products that are not only visually polished but also technically scalable and future-ready.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
