import { useState, useEffect } from "react";
import "../styles/popup.css";
import PropTypes from "prop-types";
import {
  CircleX,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import Bbsr from "../../../assets/dhauli.svg";

const ContactPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popup")) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;
  //   const mailtoLink = `mailto:sandeepbeherakbl@gmail.com?subject=Contact%20Form%20Submission&body=Name: ${encodeURIComponent(
  //     name
  //   )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
  //     message
  //   )}`;
  //   window.location.href = mailtoLink;
  //   handleClose();
  // };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <>
      <div className={`popup-overlay ${isVisible ? "show" : ""}`}>
        <div className="popup-main">
          <div
            className={`popup ${isVisible ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-head">
              <div className="contact-title">
                {/* <h1>Contact Me</h1> */}
                {/* <p>
                  Curious about my work or interested in a collaboration? Get in
                  touch – I&apos; d love to hear from you!
                </p> */}
              </div>

              <button className="close-btn" onClick={handleClose}>
                <CircleX color="#783FEF" />
              </button>
            </div>

            <div className="contact-details">
              <div className="contact-card">
                <div className="contact-head">
                  <div className="profile-img"></div>
                  <div>
                    <p>Sandeep Kumar</p>
                    <p>Behera</p>
                  </div>

                  <h3>Frontend Developer</h3>
                  <div className="location-card">
                    <div className="location-icon">
                      {/* <MapPin color="#0bff00" /> */}
                      <img src={Bbsr} alt="" />
                    </div>
                    <div className="location-titel">
                      <p>Patia, Bhubaneswar</p>
                      <p>Odisha, 751024</p>
                    </div>
                  </div>
                </div>
                <div className="contact-social">
                  <div className="social-contact-details">
                    {/* email */}
                    <div className="email-container social-container">
                      <div className="email social-logo">
                        <Mail color="#fe0000" width={15} />
                      </div>
                      <div className="social-title">
                        <p>EMAIL</p>
                        <a href="mailto:sandeepbeherakbl@gmail.com">
                          sandeepbeherakbl@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* insta */}
                    <div className="insta-container social-container">
                      <div className="instagram social-logo">
                        <Instagram color="#fe00f6" width={15} />
                      </div>
                      <div className="social-title">
                        <p>INSTAGRAM</p>
                        <a
                          href="https://www.instagram.com/_blue.beast_/"
                          target="_blank"
                        >
                          _blue.beast_
                        </a>
                      </div>
                    </div>

                    {/* facebook */}
                    <div className="facebook-container social-container">
                      <div className="social-logo">
                        <Facebook color="#00aaff" width={15} />
                      </div>
                      <div className="social-title">
                        <p>FACEBOOK</p>
                        <a
                          href="https://www.facebook.com/sandeepkumar.behera.142?mibextid=ZbWKwL"
                          target="_blank"
                        >
                          sandeepkumar.behera
                        </a>
                      </div>
                    </div>

                    {/* linkedin */}
                    <div className="linkedin-container social-container">
                      <div className="social-logo">
                        <Linkedin color="#011efe" width={15} />
                      </div>
                      <div className="social-title">
                        <p>LINKEDIN</p>
                        <a
                          href="https://www.linkedin.com/in/sandeep-kumar-behera-24051999/"
                          target="_blank"
                        >
                          sandeep-kumar-behera
                        </a>
                      </div>
                    </div>

                    {/* github */}
                    <div className="github-container social-container">
                      <div className="social-logo">
                        <Github color="#ab20fd" width={15} />
                      </div>
                      <div className="social-title">
                        <p>GIT HUB</p>
                        <a
                          href="https://github.com/sandeepbeherakbl"
                          target="_blank"
                        >
                          sandeepbeherakbl
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-div">
               
                <form style={{ width: "450px" }} onSubmit={""}>
                   <p>Contact Me</p>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label>Enter Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="button-div">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ContactPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactPopup;
