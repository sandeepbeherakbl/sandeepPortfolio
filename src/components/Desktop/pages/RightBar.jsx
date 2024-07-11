import "../styles/Main.css";
import {useState} from "react"
import Slogo from "../../../assets/S.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rocket  from "../../../assets/anim.gif";
import ContactPopup from "./ContackPopup"

export const RightBar = ({ setSelectedProject }) => {

  const [showPopup, setShowPopup] = useState(false);
  
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="right-bar-main-section">
        {/* /head */}
        <div className="right-bar-head">
          <img src={Slogo} alt="" />
        </div>

        {/* body */}
        <div className="right-body-main">
          <div className="nav-icons">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => setSelectedProject(null)}
            >
              <p>Home</p>
            </Link>

            <Link
              to="/experience"
              style={{ textDecoration: "none" }}
              onClick={() => setSelectedProject(null)}
            >
              <p>Experience</p>
            </Link>

            <Link
              to="/projects"
              style={{ textDecoration: "none" }}
              onClick={() => setSelectedProject(null)}
            >
              <p>Projects</p>
            </Link>
          </div>

          <div className="gif">
            <img src={Rocket} alt="loading..." onClick={openPopup} />
          </div>
          {showPopup && <ContactPopup onClose={closePopup} />}
        </div>
      </div>
    </>
  );
};

RightBar.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};
