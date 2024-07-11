import { About } from "./Pages/About";
import { Topbar } from "./Pages/Topbar";

export const MobileMain = () => {
  return (
    <>
      <div className="main-component-div">
        <Topbar />
        <About/>
      </div>
    </>
  );
};
