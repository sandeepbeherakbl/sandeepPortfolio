import Typewriter from "typewriter-effect";
import { MobileAbout } from "./MobileAbout";
import { Intro } from "./Intro";

export const Home = () => {
  return (
    <>
      <div className="mob-about-main-div mob-body-container-height">
        <div className="mob-about-img-div">
          <div className="mob-about-sub-div">
            <h1>
              Crafting Code with a Designer's Touch: Full Stack Developer &
              Design Enthusiast
            </h1>

            <div className="mob-home-main-container">
              <div className="mob-home-container">
                <div className="mob-home-image">
                  <div className="mob-home-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileAbout />
        <Intro />
      </div>
    </>
  );
};
