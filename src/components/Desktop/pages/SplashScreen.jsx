import { motion, AnimatePresence } from "framer-motion";
import "../styles/SplashScreen.css";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import logo from "../../../assets/S.png";

const SplashScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 180 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div 
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <div className="splash-content">
            <motion.div 
              className="logo-wrapper"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={logo} alt="Logo" className="splash-logo" />
              <div className="logo-shadow"></div>
            </motion.div>

            <motion.div 
              className="loading-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="progress-wrapper">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.p 
                className="loading-text"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Experience... {progress}%
              </motion.p>
            </motion.div>
          </div>

          <div className="background-effects">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="effect-circle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                  rotate: 360
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SplashScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired
};

export default SplashScreen;
