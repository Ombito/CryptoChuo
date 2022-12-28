import React from 'react';
import "../Login/style.css"
import { useState } from 'react';
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
                        
                    </label>
                    <button className="button" type='submit' >Login</button>
                </form>
                <p className="account"><a href="/Login"><span >   Forgot password?   </span> </a> 
                    </p>
            </div>
    
  )}
    
    


   
export default LogIn;
