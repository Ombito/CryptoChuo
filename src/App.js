import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route ,Routes} from 'react-router-dom';
import Courses from './components/Courses';
import Home from './components/Home';
import LogIn from './components/Login';
import About from './components/About';
import Markets from './components/Markets';
import News from './components/News';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Events from './components/Events';
import Careers from './components/Careers';
import Sponsorship from './components/Sponsorship';




function App() {
  const [user, setUser] = useState({});
  const[refresh, setRefresh]=useState(false)


  useEffect(() => {
    fetch("http://127.0.0.1:5555/session_user")
    .then(response=>{
      if (response.ok){
        return response.json()
      }
    })
    .then(data=>setUser(data))
    .catch(error => console.log(error));
  }, [refresh]); 


  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Navbar admin={admin} setAdmin={setAdmin} setUser={setUser} user={user}/>} />
            <Route path="/courses" element={<Courses user={user} refresh={refresh} setRefresh={setRefresh}/>} />
            <Route path="/login" element={<LogIn setUser={setUser}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/news" element={<News />} />
            <Route path="shop" element={<Shop user={user} refresh={refresh} setRefresh={setRefresh}/>} />
            <Route path="checkout" element={<Checkout user={user} refresh={refresh} setRefresh={setRefresh}/>} />
            <Route path="cart" element={<Cart user={user} refresh={refresh} setRefresh={setRefresh}/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/shop" element={<Shop refresh={refresh} setRefresh={setRefresh}/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
