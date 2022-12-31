import React from 'react';
import "../SignUp/style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
// import 'font-awesome/css/font-awesome.min.css';



const Signup = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirm_password, setConfirmPassword] = useState("");
const [first_name, setFirstName] = useState("");
const [last_name, setLastName] = useState("");
const [message, setMessage] = useState("");



  return(

      <div className='form'>
                <h2 className='signup'>Sign Up</h2>
                <form onSubmit>
                    <label>
                        <div className="fullName">
                            
                               <input className="firstname"
                                type="text"
                                placeholder="First Name" 
                                value={first_name}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}>  
                                </input>

                               <input className="lastname"
                                type="text"
                                placeholder="Last Name"
                                value={last_name}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}>  
                                </input>
                            </div>
                       
                        <div className="email">
                            <input className="container"
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }
                                }
                            ></input></div>
                        <div className="password">
                            <input className="container"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }
                                }
                            />
                            </div>
                        <div className="confirm_password">
                            <h5> </h5>
                            <input className="container"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirm_password}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                    </label>

                    <Link to="/courses">
                    <button 
                    className="signupbutton" 
                    type='submit' 
                    >SignUp</button>
                    </Link>
                    <div className='message'> {message ? <p>{message}</p> : null}</div>
                </form>
                <p className="account">Have an account?
                    <a href="/login"><Link to="/login">        Login</Link></a> </p>
            </div>
    
  )}
    
    
                            

   
export default Signup;
