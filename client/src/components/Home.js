import React from 'react'
import { Login } from './Login'
// import Greet from './Greet'
// import { useState} from 'react'
// import { Notes } from './Notes'
// import notes_task from './notes_task.png'

export const Home = (props) => {
     // const [isVisible, setIsVisible] = useState(true);

     // Function to toggle the visibility of the div
     // function toggleVisibility() {
     //      setIsVisible(!isVisible);
     // }

     // useEffect(() => {
     //      const interval = setInterval(() => {
     //           toggleVisibility();
     //      }, 60000); // Toggle visibility every 60 seconds

     //      return () => clearInterval(interval);
     // }, []);
     return (
          <>
               {/* <div className="greet">
                    <Greet />
               </div> */}
               <div className="home-container">
                    {/* <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div> */}
                    <div className="hero1">
                         <div className="herosub">
                              {/* <div className="herosubsub">
                                   <div className="hero__content" style={{ "max-width": '400px' }}>
                                        <div className="layout_flex"></div>
                                   </div>
                              </div> */}
                         </div>
                         <div className="herologin">
                              <Login />
                         </div>
                    </div>
               </div>
          </>
     )
}

