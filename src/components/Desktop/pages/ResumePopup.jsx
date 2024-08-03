import PropTypes from "prop-types";
import PdfViewer from "../../Mobile/Pages/PdfViewer";
import { CircleX } from "lucide-react";

const ResumePopup = ({ onClose }) => (
  <div className="resume-popup-overlay">
    <div className="resume-popup">
      <button onClick={onClose} className="resume-close-button">
        <CircleX color="#d9534f" />
      </button>
      <PdfViewer />
    </div>
  </div>
);

ResumePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ResumePopup;
