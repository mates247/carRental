import React from "react";

const Modal = ({isVisible, onClose}) => {
  if (!isVisible) return null
  return (
    <div className="modal">
      <div className="modal-small-div-main">
        <h1>Ceník</h1>
        <h3 className="pt-2">Oprava</h3>
        <p>500 - 1000,- Kč</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <h3 className="pt-2">Oprava</h3>
        <p>500 - 1000,- Kč</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <h3 className="pt-2">Oprava</h3>
        <p>500 - 1000,- Kč</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <button onClick={() => onClose()} className="btn">zavřít</button>
      </div>
    </div>
  );
};

export default Modal;