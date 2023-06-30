import React, { useState } from 'react'
import "../Migration.css";
import DialogBox from '../components/DialogBox';

const Migration = (props) => {

  const [isDialogVisible, setDialogVisible] = useState(false);
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  // const [selectedOption, setSelectedOption] = useState(' ');
  const [selectedOptions, setSelectedOptions] = useState('option0');

  const onPressMigrate = () => {
    console.log('Selected Option:', selectedOptions);
    setTimeout(() => {
      setShowFirstDiv(false);
    }, 2000);
  }

  function handleApiSelect(event) {
    const selectedValue = event.target.value;
    setSelectedOptions(selectedValue);
    // Reset selected checkboxes when a different option is selected
  }

  const onPressMigrateSohow = async () => {
    setDialogVisible(true);
    // fetch('https://8fb626e7trial.it-cpitrial06.cfapps.us10-001.hana.ondemand.com')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Request failed with status code ' + response.status);
    //     }
    //     return response.text(); // Retrieve response as text
    //   })
    //   .then(data => {
    //     // Handle the response data based on the expected format
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    // window.location.href = 'https://8fb626e7trial.it-cpitrial06.cfapps.us10-001.hana.ondemand.com';
  };


  // const handleCheckboxChange = (value) => {
  //   if (selectedCheckboxes.includes(value)) {
  //     setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== value));
  //   } else {
  //     setSelectedCheckboxes([...selectedCheckboxes, value]);
  //   }
  // };

  const handleIflowSelect = (event) => {
    const selected = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selected);
  };

  const handleClose = () => {
    setDialogVisible(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      {showFirstDiv ? (
        <div className="part11" id="firstDiv">
          <div className="part12">
            <div className="h6 labelmain">Select API: </div>
            <select id="apiSelect" className="fileIn" onChange={handleApiSelect}>
              <option value="">Select an API</option>
              <option value="option1">client-mule-application</option>
              <option value="option2">buisness-partner-mule-application</option>
              <option value="option3">employee-info-mule-application</option>
              <option value="option4">financial-clientdeals-mule-application</option>
              <option value="option5">access-management-mule-application</option>
              <option value="option6">process-management-mule-application</option>
              <option value="option7">buisness-management-mule-application</option>
              <option value="option8">repository-management-mule-application</option>
            </select>
          </div>
          <div className="box_class">
            <button
              className="validateButton11 part1"
              onClick={onPressMigrate}>
              Migrate
            </button>
          </div>
        </div>
      ) : (
        <div className="box22">
          <div className="partOne">
            <div className="h6 labelmainOne">Select Template: </div>
            <select id="apiSelect" className="fileInOne" value={selectedOptions} onChange={handleIflowSelect}>
              <option value="option0">Select an Option:</option>
              <option value="option1">Flow_Rest_API</option>
              <option value="option2">Subflow_Resource1</option>
              <option value="option3">Flow_ConnectBackend</option>
            </select>
          </div>
          <div className="box_class_one">
            <button
              className="validateButton11 partOneBtn"
              onClick={onPressMigrateSohow}>
              Create an IFLOW
            </button>
            {isDialogVisible && <DialogBox onClose={handleClose} />}
          </div>
        </div>
      )}


    </div>
  )
}

export default Migration