import {
  FacebookIcon,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SERVICE_ID = "service_vbai69q";
  const TEMPLATE_ID = "template_nc5wpdx";
  const THANK_YOU_TEMPLATE_ID = "template_7eopaqr";
  const PUBLIC_KEY = "xOb1kL7ya4qPOFlyg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setShowSuccess(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "sandeepbeherakbl@gmail.com",
        },
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        THANK_YOU_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        PUBLIC_KEY
      );

      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
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
              {/* <div className="mob-contact-main-div">
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
              </div> */}
              
            </div>
            <form className="phn-cnt-form" onSubmit={handleSubmit}>
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

                <div className="phn-button-div">
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "SEND"}
                  </button>
                </div>
                {showSuccess && (
                  <p className="success-message">Message sent successfully!</p>
                )}
                {error && (
                  <p className="error-message">
                    Failed to send email. Please try again.
                  </p>
                )}
              </form>
          </div>
        </div>

        <div className="mob-contact-email">
          <div className="mob-contact-email-body">
            {/* <p>git hub</p> */}
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
