import "../styles/Main.css";
import { useState } from "react";
import Slogo from "../../../assets/S.png";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ContactPopup from "./ContackPopup";
import Contact from "../../../assets/contacticon.png"

export const RightBar = ({ setSelectedProject }) => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const isActive = (path) => location.pathname === path;

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
              className={isActive("/") ? "active-tab" : ""}
            >
              <p>Home</p>
            </Link>

            <Link
              to="/experience"
              style={{ textDecoration: "none" }}
              onClick={() => setSelectedProject(null)}
              className={isActive("/experience") ? "active-tab" : ""}
            >
              <p>Experience</p>
            </Link>

            <Link
              to="/projects"
              style={{ textDecoration: "none" }}
              onClick={() => setSelectedProject(null)}
              className={isActive("/projects") ? "active-tab" : ""}
            >
              <p>Projects</p>
            </Link>

            {/* <Link
              to="/projects"
              style={{ textDecoration: "none" }}
              onClick={() => setSelectedProject(null)}
              className={isActive("/projects") ? "active-tab" : ""}
            >
            <p>Blogs</p>
            </Link> */}

          </div>

          <div className="gif">
            <img src={Contact} alt="loading..." onClick={openPopup} />
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
