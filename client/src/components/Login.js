import React, { useState } from 'react';
import '../Signup.css';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
     const [credentials, setCredentials] = useState({ email: "", password: "" })
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch("http://localhost:5001/api/auth/loginuser", {
               method: "POST", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ email: credentials.email, password: credentials.password })
          });
          const json = await response.json();
          console.log(json);
          if (json.success) {
               //Save the token and redirect
               localStorage.setItem('token', json.authtoken);
               console.log("LoggedIn Successfully", "success");
               navigate('/layout');
          }
          else {
               console.log("Invalid Credentials", "danger")
          }
     }

     const onChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })
     }

     return (
          <div>
               <div className="form-container">
                    <form className="signup-form" onSubmit={handleSubmit}>
                         <div className="loginp3">
                              <h5>IntSwitch Migration Tool</h5>
                              <h6>Enter your Credentials</h6>
                         </div>
                         <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                   type="email" id="email" name="email"
                                   placeholder="Email"
                                   value={credentials.email}
                                   onChange={onChange} required
                              />
                         </div>
                         <div className="form-group1">
                              <label htmlFor="password">Password</label>
                              <input
                                   type="password" id="password" name="password"
                                   placeholder="Password"
                                   value={credentials.password}
                                   onChange={onChange} required />
                         </div>
                         <div className="btn-group5">
                              <button type="submit" className='mx-3'>Login</button>
                              <button type="submit" className='mx-3 forget'>Forgot Password</button>
                              <p className='mx-3 my-2 para'>Not Registered?<Link className="text-decoration-none" to="/signuphome" role="button">Sign Up</Link></p>
                              {/* <div className="btn btn2">
                                   <p className='mx-3 my-2 para'>Not Registered?<Link className="text-decoration-none" to="/signuphome" role="button">Sign Up</Link></p>
                              </div> */}
                         </div>
                    </form>
               </div>
          </div>
     );
};
