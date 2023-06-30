import React from 'react';
import '../Dialogue.css';

const DialogBox = ({ onClose }) => {
     return (
          <div className="dialog-box">
               <h4>IntSwitch</h4>
               <p>Your IFLOW is Successfully Created. Please login to SAP Integration Suite tenant package(MS to SAP- IS) to check the IFLOW Created.</p>
               <button onClick={onClose}>Close</button>
          </div>
     );
};

export default DialogBox;
