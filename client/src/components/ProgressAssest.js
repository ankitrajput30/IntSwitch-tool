import React from 'react'
import '../Dialogue.css';

const ProgressAssest = ({ onClose }) => {
     return (
          <div className="progress-box">
               <h4>IntSwitch</h4>
               <p>Generating Report...</p>
               <button onClick={onClose}>Close</button>
          </div>
     );
};

export default ProgressAssest