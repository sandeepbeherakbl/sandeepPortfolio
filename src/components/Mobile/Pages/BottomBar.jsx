import { NavLink } from "react-router-dom";
import { Briefcase, Contact, Folder, Home } from "lucide-react";

export const BottomBar = () => {
  return (
    <div className="mob-bottom-main-div">
      <NavLink to="/" className="mob-bottom-nav-icon" activeClassName="active">
        {({ isActive }) => (
          <>
            <Home width={20} color={isActive ? "#783FEF" : "#2E323A"} />
            <p style={{ color: isActive ? "#783FEF" : "#2E323A" }}>HOME</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/experience"
        className="mob-bottom-nav-icon"
        activeClassName="active"
      >
        {({ isActive }) => (
          <>
            <Briefcase width={20} color={isActive ? "#783FEF" : "#2E323A"} />
            <p style={{ color: isActive ? "#783FEF" : "#2E323A" }}>EXPERIENCE</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/projects"
        className="mob-bottom-nav-icon"
        activeClassName="active"
      >
        {({ isActive }) => (
          <>
            <Folder width={20} color={isActive ? "#783FEF" : "#2E323A"} />
            <p style={{ color: isActive ? "#783FEF" : "#2E323A" }}>MY PROJECTS</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/contact"
        className="mob-bottom-nav-icon"
        activeClassName="active"
      >
        {({ isActive }) => (
          <>
            <Contact width={20} color={isActive ? "#783FEF" : "#2E323A"} />
            <p style={{ color: isActive ? "#783FEF" : "#2E323A" }}>CONTACT ME</p>
          </>
        )}
      </NavLink>
    </div>
  );
};
