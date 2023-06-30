import React, { useState } from 'react';
import '../Layout.css';
import Assesment from './Assesment';
import Migration from './Migration';
import Testing from './Testing';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const SplitScreen = (props) => {
     const [activeOption, setActiveOption] = useState(1);
     const navigate = useNavigate();

     const handleOptionClick = (option) => {
          setActiveOption(option);
     };

     const onClickLogout = () => {
          navigate('/');
     };

     let activePageTitle = '';

     switch (activeOption) {
          case 1:
               activePageTitle = 'Assessment';
               break;
          case 2:
               activePageTitle = 'Migration';
               break;
          case 3:
               activePageTitle = 'Testing';
               break;
          default:
               break;
     }

     let activePageComponent = null;

     switch (activeOption) {
          case 1:
               activePageComponent = <Assesment />;
               break;
          case 2:
               activePageComponent = <Migration showAlert={props.showAlert}/>;
               break;
          case 3:
               activePageComponent = <Testing />;
               break;
          default:
               break;
     }

     return (
          <div className="split-screen">
               <div className="navigation">
                    <div
                         className={`nav-option nav111 ${activeOption === 1 ? 'active' : ''}`}
                         onClick={() => handleOptionClick(1)}
                    >
                         Assessment
                    </div>
                    <div
                         className={`nav-option ${activeOption === 2 ? 'active' : ''}`}
                         onClick={() => handleOptionClick(2)}
                    >
                         Migration
                    </div>
                    <div
                         className={`nav-option ${activeOption === 3 ? 'active' : ''}`}
                         onClick={() => handleOptionClick(3)}
                    >
                         Testing
                    </div>
                    <div className="logout">
                         <Button className='btn_log'
                          onClick={onClickLogout}>
                              <i className="fa-solid fa-right-from-bracket"></i>
                              Logout
                         </Button>
                    </div>
               </div>
               <div className="content">
                    <div className="content_heading">
                         {activePageTitle}
                    </div>
                    <div className="verticalLine"></div>
                    <div className="content22" showAlert={props.showAlert}>
                         {activePageComponent}
                    </div>
               </div>
          </div>
     );
};

export default SplitScreen;