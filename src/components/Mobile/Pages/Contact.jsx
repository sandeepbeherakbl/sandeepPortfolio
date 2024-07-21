import {
  FacebookIcon,
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
                  <Phone width={20} />
                </div>
                <div className="mob-contact-content">
                  <p>Contact Number</p>
                  <a href="tel:+919556230850">+91 9556230850</a>
                </div>
              </div>

              <div className="mob-contact-main-div">
                <div className="mob-contact-img">
                  <Mail width={20} />
                </div>
                <div className="mob-contact-content">
                  <p>Email</p>
                  <a href="mailto:sandeepbeherakbl@gmail.com">
                    sandeepbeherakbl@gmail.com
                  </a>
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
                  <Github width={20} />
                </div>
                <div className="mob-contact-content">
                  <p>Github</p>
                  <a href="https://github.com/sandeepbeherakbl" target="_blank">
                    sandeepbeherakbl
                  </a>
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
                  <Linkedin width={20} />
                </div>
                <div className="mob-contact-content">
                  <p>Linked in</p>
                  <a
                    href="https://www.linkedin.com/in/sandeep-kumar-behera-24051999/"
                    target="_blank"
                  >
                    sandeep-kumar-behera-24051999
                  </a>
                </div>
              </div>

              <div className="mob-contact-main-div">
                <div className="mob-contact-img mob-insta">
                  <Instagram width={20} />
                </div>
                <div className="mob-contact-content">
                  <p>Instagram</p>
                  <a
                    href="https://www.instagram.com/_blue.beast_/"
                    target="_blank"
                  >
                    _blue.beast_
                  </a>
                </div>
              </div>

              <div
                style={{ marginTop: "20px" }}
                className="mob-contact-main-div"
              >
                <div className="mob-contact-img mob-facebook">
                  <FacebookIcon width={20} />
                </div>
                <div className="mob-contact-content">
                  <p>Facebook</p>
                  <a
                    href="https://www.facebook.com/sandeepkumar.behera.142?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    sandeepkumar.behera
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
