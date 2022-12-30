import React from 'react';
import "../SignUp/style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 



const Signup = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [firstname, setFirstName] = useState("");
const [lastname, setLastName] = useState("");



// const submitting = (event) => {
//     event.preventDefault()
//     const user = {fullname, gender,password, email }
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: JSON.stringify(
//             user
//         ),
//         redirect: 'login'
//     };
   
// }



  return(

      <div className='form'>
                <h2 className='signup'>Sign Up</h2>
                <form onSubmit>
                    <label>
                        <div className="fullName">
                            
                               <input className="firstname"
                                type="text"
                                placeholder="First Name" 
                                value={firstname}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}>  
                                </input>

                               <input className="lastname"
                                type="text"
                                placeholder="Last Name"
                                value={lastname}
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
                            ></input><br></br></div>
                        <div className="confirm_password">
                            <h5> </h5>
                            <input className="container"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                    </label>
                    <Link to="/courses">
                    <button className="signupbutton" type='submit' >SignUp</button>
                    </Link>
                </form>
                <p className="account">Have an account?
                    <a href="/login"><Link to="/login">        Login</Link></a> </p>
            </div>
    
  )}
    
    


   
export default Signup;
