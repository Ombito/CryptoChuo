import React from 'react';
import "../SignUp/style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 



const Signup = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirm_Password, setConfirmPassword] = useState("");
const [first_name, setFirstName] = useState("");
const [last_name, setLastName] = useState("");
const [message, setMessage] = useState("");



// const submitting = (event) => {
//     event.preventDefault()
//     const user = {first_name, last_name, email,password, confirm_password }
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
let handleSubmit = async(e) => {
    e.preventDefault();
    try{let res = await fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
    
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        confirm_Password: confirm_Password
      })
    });
    let resJson = await res.json();
    if (res.status === 200){
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMessage("User created successfully");

    }else {
        setMessage("Error");
    }
  }catch (err){
    console.log(err)
  }

}



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
                            ></input><br></br></div>
                        <div className="confirm_password">
                            <h5> </h5>
                            <input className="container"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirm_Password}
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
