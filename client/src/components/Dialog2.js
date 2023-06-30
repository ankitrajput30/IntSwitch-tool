import React from 'react'
import '../Dialogue.css';

const Dialog2 = ({onClose}) => {
     return (
          <div className="dialog-box">
               <h4>IntSwitch</h4>
               <p>The Testcase has passed successfully.</p>
               <button onClick={onClose}>Close</button>
          </div>
     );
}

export default Dialog2