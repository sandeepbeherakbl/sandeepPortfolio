import PropTypes from "prop-types";
import "./Preloader.css";
import { useEffect, useState } from "react";
import MyLogo from "../../assets/S.png";

const SplashPage = ({ onTransitionEnd }) => {
  const [fadeOutLoader, setFadeOutLoader] = useState(false);
  const [fadeOutBackground, setFadeOutBackground] = useState(false);

  useEffect(() => {
    const loaderDuration = 2000; 
    const fadeOutDuration = 1000; 

    const loaderTimer = setTimeout(() => {
      setFadeOutLoader(true); 

      const backgroundTimer = setTimeout(() => {
        setFadeOutBackground(true); 
        setTimeout(onTransitionEnd, fadeOutDuration); 
      }, fadeOutDuration);

      return () => clearTimeout(backgroundTimer);
    }, loaderDuration);

    return () => clearTimeout(loaderTimer);
  }, [onTransitionEnd]);

  return (
    <div className={`main-bg ${fadeOutBackground ? "fade-out" : ""}`}>
      <div className={`splash-background ${fadeOutLoader ? "fade-out" : ""}`}>
        <div className="logo-div">
          <img src={MyLogo} alt="Logo" />
        </div>
        <div className="pulse">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 6 }}></span>
        </div>
      </div>

      {/* Bar Loader */}
      <div className={`bar-loader ${fadeOutLoader ? "fade-out" : ""}`}>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

SplashPage.propTypes = {
  onTransitionEnd: PropTypes.func,
};

SplashPage.defaultProps = {
  onTransitionEnd: () => {},
};

export default SplashPage;
