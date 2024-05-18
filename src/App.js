import React, { useState, useEffect } from 'react';
import './App.css';
import { Route , Routes, useLocation, Navigate} from 'react-router-dom';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import Home from './components/Home';
import LogIn from './components/Login';
import About from './components/About';
import Markets from './components/Markets';
import News from './components/News';
import Shop from './components/Shop';
import Navbar from './components/Navbar/index.jsx';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Events from './components/Events';
import Careers from './components/Careers';
import Sponsorship from './components/Sponsorship';
import { useSnackbar } from 'notistack';
import Chat from './components/Chat/index.jsx';
import Cookies from 'js-cookie';

function App() {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh]=useState(false);
  const [cart, setCart] = useState([]);
  const [courses, setCourses] = useState(true);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();


  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/users/${userId}`, {
    
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Failed to fetch user details:', response.status);
      }
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userId = decodedToken.user_id;
      fetchUserDetails(userId);
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.user_id;
        fetchUserDetails(userId);
      }
    }, 1800000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const apiUrl1 = `http://127.0.0.1:5555/courses`;
    fetch(apiUrl1)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched courses:', data); 
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      Cookies.set('userData', JSON.stringify(user), { expires: 7 });
      localStorage.setItem('userData', JSON.stringify(user));
    }
  }, [user]);

  const handleClick =  (item) => {
    console.log(item);
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      enqueueSnackbar('Item is already added to your Cart', { variant: 'warning' });
    } else {
      setCart([...cart, item]);
    }
  };
  
  console.log('Cart length:', cart.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="App">
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && <Navbar user={user} setUser={setUser} size={cart.length} courses={courses} />}
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/courses" element={<Courses user={user} />} />
          <Route path="/courses/:id" element={<CourseDetails user={user} handleClick={handleClick} />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop handleClick={handleClick}/>} />
          <Route path="checkout" element={<Checkout user={user}/>} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} refresh={refresh} handleClick={handleClick} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && <Footer />}

    </div>
  );
}

export default App;
