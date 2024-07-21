// src/components/Modal.js
import { CircleX } from "lucide-react";
import "./Modal.css";
import PropTypes from "prop-types";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} style={{marginBottom:"10px"}}>
          <CircleX color="#E51E1E" />
        </button>
        <div style={{overflowY: "scroll", height: "90%"}}>
          <h4 style={{margin: 0}}>About</h4>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
