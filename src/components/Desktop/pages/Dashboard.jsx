import { Download } from "lucide-react";
import Typewriter from "typewriter-effect";

export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-main-div">
        {/* header */}
        <div className="dash-header-section">
          <div className="dash-header-content">
            <h1>
              Crafting Code with a Designer's Touch: Full Stack Developer &
              Design Enthusiast
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

        {/* intro */}
        <div className="intro-main-div">
          <div className="intro-heading">
            <p>My Digital Journey:</p>
            <p>Empowering Innovation as a JavaScript Developer.</p>
          </div>
          <div className="intro-content">
            <p>
              Dive into the world of seamless digital experiences with a
              dedicated JavaScript Developer armed with 2 years of hands-on
              expertise. From mastering ES6 and React to integrating
              cutting-edge platforms via REST and GIT, I thrive on transforming
              designs into pixel-perfect HTML and Sass/CSS creations. With a
              passion for server technologies like NPM, I collaborate closely
              with UX and Visual Designers, sculpting reliable features that
              elevate user interactions. My journey is defined by a relentless
              pursuit of innovation, leveraging technology to drive impactful
              solutions that shape the future of digital experiences. Let's
              innovate together to power your next-generation customer
              interactions and exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
