import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { Clock, Wifi, Battery, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import "./MacBook.css";

const MacBook = ({ isOpen, onClose, children }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2; // Increment by 2 every 100ms to reach 100 in 5 seconds
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="macbook-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="pulse-rings">
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
          </div>
          <motion.div
            className="macbook-container"
            initial={{ scale: 0.8, y: 100, rotateX: 45 }}
            animate={{ scale: 1, y: 0, rotateX: 10 }}
            exit={{ scale: 0.8, y: 100, rotateX: 45 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="macbook">
              <motion.div
                className="macbook-screen"
                initial={{ rotateX: -90 }}
                animate={{ rotateX: 0 }}
                exit={{ rotateX: -90 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="macbook-content">
                  <div className="dynamic-bg" />
                  <div className="glass-effect" />
                  <div className="macbook-topbar">
                    <div className="topbar-left">
                      <button className="window-button close-btn" onClick={onClose}></button>
                      <button className="window-button red-btn"></button>
                      <button className="window-button minimize-btn"></button>
                      <button className="window-button maximize-btn"></button>
                    </div>
                    <div className="address-bar">
                      <div className="secure-badge">
                        <Lock size={12} />
                        <span>Secure</span>
                      </div>
                      <span>https://sandeep-behera-kbl.vercel.app</span>
                    </div>
                    <div className="topbar-right">
                      <Clock size={14} />
                      <Wifi size={14} />
                      <Battery size={14} />
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="floating-circles">
                      <div className="floating-circle"></div>
                      <div className="floating-circle"></div>
                      <div className="floating-circle"></div>
                    </div>
                    <div className="project-title-wrapper">
                      {children}
                      <div className="loading-container-pro">
                        <div className="loading-bar">
                          <motion.div
                            className="loading-progress"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                          />
                        </div>
                        <div className="loading-text">{progress}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="macbook-base"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="macbook-keyboard" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MacBook.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MacBook;
