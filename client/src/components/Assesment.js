import React, { useState } from 'react';
import "../Layout.css";
import { Button } from '@mui/material';
import Report from '../Report.png'
import ProgressAssest from './ProgressAssest';
import MigrationReport from '../MigrationReport.pdf';

const Assesment = () => {

  const [isProgressVisible, setProgressVisible] = useState(false);
  const [userFileName, setUserFileName] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleUploadSelectedButton = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Perform further operations with the selected file
      console.log(selectedFile.name);
      setUserFileName(selectedFile.name);
    }
  };

  const handleGenerateReport = () => {
    setProgressVisible(true);
    // Set the image source to be displaye;
    setTimeout(() => {
      setImageSrc(Report);
    }, 2000);
  };

  const handleSaveAsPDF = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  const handleClose = () => {
    setProgressVisible(false);
  };


  return (
    <>
      <div className='maindiv11'>
        <div className="mainFile">
          <div className="h6 labelmain">Select MuleSoft Archive File:</div>
          <div className="fileName">{userFileName}</div>
          <div className="part1"><label htmlFor="upload">Select</label></div>
          <input
            id='upload'
            className='upload'
            type="file"
            name="myFileUpload"
            onChange={handleUploadSelectedButton}
          />
        </div>
        <div className="class3">
          <Button className="btn111"
            onClick={handleGenerateReport}>
            <i className="fa-solid fa-file-export"></i>
            Generate Report
          </Button>
          {isProgressVisible && <ProgressAssest onClose={handleClose} />}
          <Button className="btn222"
            onClick={handleSaveAsPDF}>
            <i className="fa-solid fa-download"></i>
            <a href={MigrationReport} download> Save as a PDF</a>
          </Button>
        </div>
      </div>
      <div className="report">
        {imageSrc && <img className="generated-image" src={imageSrc} alt="Generated Report" />}
      </div>
    </>
  )
}

export default Assesment