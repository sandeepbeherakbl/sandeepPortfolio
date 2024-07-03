import { useState, useEffect } from "react";
import "../styles/popup.css";
import PropTypes from "prop-types";
import { CircleX } from "lucide-react";
// import { ToastContainer, toast } from 'react-toastify';

const ContactPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast("Wow so easy !");
    handleClose();
  };

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
              <h2>Contact Form</h2>
              <button className="close-btn" onClick={handleClose}>
                <CircleX color="#F37575" />
              </button>
            </div>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
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
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <ToastContainer/> */}
    </>
  );
};

ContactPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactPopup;
