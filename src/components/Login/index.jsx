import React from 'react';
import "../Login/style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 



const LogIn = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");




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
                <h2 className='signup'>LogIn</h2>
                <form onSubmit>
                    <label>
                        
                        <div className="email">
                            <label>Email address</label>
                            <input className="container"
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }
                                }
                            ></input></div>
                        <div className="password">
                            <label>Password</label>
                            <input className="container"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                        
                    </label>
                    <div className="checkbox-div">
                        <div>
                            <input type="checkbox" />
                            <label>Remember me</label>
                        </div>
                        <p className="account"><a href="/Login"><span >Forgot password?   </span> </a> 
                    </p>
                    </div>
                    <Link to="/courses">
                    <button className="login-button" type='submit' >Login</button>
                    </Link>
                </form>
                <p className="account">Don't have an account?
                    <a href="/login"><Link to="/signup">         Signup</Link></a> </p>
                
            </div>
    
  )}
    
    


   
export default LogIn;
