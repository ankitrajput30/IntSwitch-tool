import React, { useState } from 'react';
import "../Testing.css";
import Dialog2 from './Dialog2';

const Testing = () => {
  const [userFileName, setUserFileName] = useState('');
  const [isDialogVisible2, setDialogVisible2] = useState(false);

  const onUploadSelectedButton = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Perform further operations with the selected file
      console.log(selectedFile.name);
      setUserFileName(selectedFile.name);
    }
  };

  const onPressTest = () => {
    // Handle button press event
    setDialogVisible2(true);
  };

  const handleClose = () => {
    setDialogVisible2(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div
      id="mainContainer1"
      className="box_class3"
    >
      <div className="part121">
        <div className="h6 labelmain">Request Payload:</div>
        <div className="fileName">{userFileName}</div>
        <div className="part1"><label htmlFor="extract">Extract</label></div>
        <input
          id='extract'
          className="fileInput"
          type="file"
          name="myFileUpload"
          onChange={onUploadSelectedButton}
        />
      </div>
      <div
        className=""
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundDesign: 'solid',
          margintop: '32px',
        }}
      >
        <div
          id="mainContainer1111"
          className="box_class3"
        >
          <label style={{ fontWeight: 'bold' }} className="h4 headingM">MuleSoft</label>
          <div className="label1">
            <label>API end Point:</label>
            <input className="textInput" type="text" />
          </div>
          <div className="label1">
            <label>Client ID:</label>
            <input className="textInput" type="text" />
          </div>
          <div className="label1">
            <label>Client Secret:</label>
            <input className="textInput" type="text" />
          </div>
        </div>
        <div
          id="mainContainer111"
          className="box_class3"
        >
          <label style={{ fontWeight: 'bold' }} className="h4 headingS">SAP CPI</label>
          <div className="label1">
            <label className="sapUiMediumPaddingEnd">API end Point:</label>
            <input className="textInput" type="text" />
          </div>
          <div className="label1">
            <label>Client ID:</label>
            <input className="textInput" type="text" />
          </div>
          <div className="label1">
            <label>Client Secret:</label>
            <input className="textInput" type="text" />
          </div>
        </div>
      </div>
      <div className="box_class">
        <button
          className="validateButton part1"
          onClick={onPressTest}
        >
          Validate
        </button>
        {isDialogVisible2 && <Dialog2 onClose={handleClose} />}
      </div>
    </div>
  );
};

export default Testing;
