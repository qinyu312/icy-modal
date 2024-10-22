import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Modal = ({ visible, onClose, onConfirm, title, content, isOkText, isCancelText, isOkColor, width }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ width }} onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{content}</div>
        <div className="modal-buttons">
          {
            onConfirm ? <button className="modal-confirm" style={{ background: isOkColor }} onClick={onConfirm}>
                        {isOkText}
                      </button>
                      : null
          }
          {
            onClose? <button className="modal-cancel" onClick={onClose}>
                        {isCancelText}
                      </button>
                      : null
          }
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Modal;
