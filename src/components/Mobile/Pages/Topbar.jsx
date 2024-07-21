import "../Styles/Mobile.css";
import logo from "../../../assets/S.png";
import {  ViewIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();

  const handleViewResume = () => {
    navigate("/resume");
  };

  return (
    <>
      <div className="topbar-main-div">
        <div className="topbar-logo">
          <img src={logo} alt="" />
        </div>

        <div className="mob-resume-download" onClick={handleViewResume}>
          <p>Resume </p>
          <ViewIcon width={15} height={15} color="#783fef" />
        </div>
      </div>
    </>
  );
};
