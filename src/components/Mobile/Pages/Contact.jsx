import {
  FacebookIcon,
  GitBranch,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export const Contact = () => {
  return (
    <>
      <div className="mob-body-container-height">
        <div className="mob-contact-sub-div">
          <p>Get In Touch</p>

          <p>
            Curious about my work or interested in a collaboration? Get in touch
            – I&apos; d love to hear from you!
          </p>
        </div>

        <div className="mob-contact-email">
          <div className="mob-contact-email-body">
            {/* <p>email</p> */}
            <div>
              <div className="mob-contact-main-div">
                <div className="mob-contact-img">
                  <Phone width={25} />
                </div>
                <div className="mob-contact-content">
                  <p>Contact Number</p>
                  <p>+91 9556230850</p>
                </div>
              </div>

              <div className="mob-contact-main-div">
                <div className="mob-contact-img">
                  <Mail width={25} />
                </div>
                <div className="mob-contact-content">
                  <p>Email</p>
                  <p>sandeepbeherakbl@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mob-contact-email">
          <div className="mob-contact-email-body">
            {/* <p>email</p> */}
            <div>
              <div className="mob-contact-main-div" style={{ margin: 0 }}>
                <div className="mob-contact-img">
                  <Github width={25} />
                </div>
                <div className="mob-contact-content">
                  <p>Github</p>
                  <p>+91 9556230850</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mob-contact-social">
          <div className="mob-contact-social-body">
            <p>Social Media</p>
            <div>
              <div className="mob-contact-main-div">
                <div className="mob-contact-img mob-linkedin">
                  <Linkedin width={25} />
                </div>
                <div className="mob-contact-content">
                  <p>Linked in</p>
                  <p>+91 9556230850</p>
                  {/* <a href=""><p>+91 9556230850</p></a> */}
                </div>
              </div>

              <div className="mob-contact-main-div">
                <div className="mob-contact-img mob-insta">
                  <Instagram width={25} />
                </div>
                <div className="mob-contact-content">
                  <p>Instagram</p>
                  <p>sandeepbeherakbl@gmail.com</p>
                </div>
              </div>

              <div
                style={{ marginTop: "20px" }}
                className="mob-contact-main-div"
              >
                <div className="mob-contact-img mob-facebook">
                  <FacebookIcon width={25} />
                </div>
                <div className="mob-contact-content">
                  <p>Facebook</p>
                  <p>sandeepbeherakbl@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
