// src/components/Modal.js
import { CircleX } from "lucide-react";
import "./Modal.css";
import PropTypes from "prop-types";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <button className="modal-close" onClick={onClose}>
          <CircleX color="red"/>
        </button>
        <h4>About</h4>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
