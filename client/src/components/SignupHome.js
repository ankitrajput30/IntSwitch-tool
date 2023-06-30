import React from "react";
import { Signup } from "./Signup";

export const SignupHome = () => {
     return (
          <>
               <div className="home-container">
                    {/* <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div> */}
                    <div className="hero1">
                         <div className="herosub"></div>
                         <div className="herologin">
                              <Signup />
                         </div>
                    </div>
               </div>
          </>
     );
};
