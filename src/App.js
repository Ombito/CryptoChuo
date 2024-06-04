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
import NavbarMenu from './components/NavMenu/NavbarMenu.jsx'
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Account from './components/Account';
import Orders from './components/Orders';
import Blogs from './components/Blogs';
import Careers from './components/Careers';
import Sponsorship from './components/Sponsorship';
import CourseCategory from './components/CourseCategory';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';


function App() {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh]=useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [courses, setCourses] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [statistics, setStatistics] = useState({
    highestMarketCapCoin: null,
    highestVolumeCoin: null,
    highestPriceCoin: null,
    biggestGainerCoin: null,
    biggestLoserCoin: null,
    mostCirculatingSupplyCoin: null,
    totalMarketCap: 0,
    averageMarketCap: 0,
  });
  const [merchandiseItems, setMerchandiseItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const [isInCart, setIsInCart] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      const { value, expiry } = JSON.parse(savedDarkMode);
      if (expiry > Date.now()) {
        return value;
      } else {
        localStorage.removeItem('darkMode');
      }
    }
    return false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  useEffect(() => {
    const expiry = Date.now() + 8640000;
    const darkModeState = { value: darkMode, expiry };
    localStorage.setItem('darkMode', JSON.stringify(darkModeState));
  }, [darkMode]);

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
    }, 240000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (courses.length === 0) {
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
    } else {
      setLoading(false);
    }
  }, [courses]);

  useEffect(() => {
    if (markets.length === 0) {
      const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=en`; 
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setMarkets(data);
          calculateStatistics(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [markets]);

  const calculateStatistics = (data) => {
    const totalMarketCap = data.reduce((acc, market) => acc + market.market_cap, 0);
  const averageMarketCap = totalMarketCap / data.length;

  const highestMarketCapCoin = data.reduce((prev, current) => {
      return prev.market_cap > current.market_cap ? prev : current;
  });

  const highestVolumeCoin = data.reduce((prev, current) => 
    (prev.total_volume > current.total_volume ? prev : current)
  );
  const highestPriceCoin = data.reduce((prev, current) => {
      return prev.current_price > current.current_price ? prev : current;
  });

  const biggestGainerCoin = data.reduce((prev, current) => 
    (prev.price_change_percentage_24h > current.price_change_percentage_24h ? prev : current)
  );

  const biggestLoserCoin = data.reduce((prev, current) => 
    (prev.price_change_percentage_24h < current.price_change_percentage_24h ? prev : current)
  );

  const mostCirculatingSupplyCoin = data.reduce((prev, current) => 
    (prev.circulating_supply > current.circulating_supply ? prev : current)
  );

  setStatistics({
    totalMarketCap,
    averageMarketCap,
    highestMarketCapCoin,
    highestVolumeCoin,
    highestPriceCoin,
    biggestGainerCoin,
    biggestLoserCoin,
    mostCirculatingSupplyCoin,
  });
};
  const {
    highestMarketCapCoin,
    highestVolumeCoin,
    highestPriceCoin,
    biggestGainerCoin,
    biggestLoserCoin,
    mostCirculatingSupplyCoin,
  } = statistics;

  useEffect(() => {
    if (merchandiseItems.length === 0) {
      const apiUrl = `http://127.0.0.1:5555/merchandises`;
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setMerchandiseItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [merchandiseItems]);


  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      Cookies.set('userData', JSON.stringify(user), { expires: 7 });
      localStorage.setItem('userData', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const handleAddToCart = (item, isCourse = false) => {
    const isPresent = cart.some((product) => product.id === item.id && product.isCourse === isCourse);
    if (isPresent) {
      enqueueSnackbar('Item is already added to your Cart', { variant: 'warning' });
    } else {
      setCart([...cart, { ...item, isCourse, quantity: 1 }]);
      setIsInCart(true);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  console.log(markets)

  return (
    <div className={`app-${darkMode ? 'dark-mode' : ''}`}>
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && <NavbarMenu  user={user} setUser={setUser} cart={cart} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        {loading ? (
          <div className="loader-container">
            <div class="loader">
              <div class="load1"></div>
              <div class="load2"></div>
              <div class="load3"></div>
              <div class="load4"></div>
              <div class="load5"></div>
              <div class="load6"></div>
              <div class="load7"></div>
              <div class="load8"></div>
              <div class="load9"></div>
            </div>
            <div class="loader">
              <p className="loading">Fetching market data...</p>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home user={user} courses={courses} />} />
            <Route path="/courses" element={user ? <Courses user={user} courses={courses} handleAddToCart={handleAddToCart} isInCart={isInCart} /> : <Navigate to="/login" />} />
            <Route path="/course-details/:id" element={<CourseDetails courses={courses} user={user} handleAddToCart={handleAddToCart} isInCart={isInCart} />} />
            <Route path="/courses/:category" element={<CourseCategory courses={courses}/>} />
            <Route path="/login" element={<LogIn setUser={setUser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/markets" element={<Markets 
              markets={markets}
              // totalMarketCap={totalMarketCap}
              // averageMarketCap={averageMarketCap}
              highestMarketCapCoin={highestMarketCapCoin}
              highestVolumeCoin={highestVolumeCoin}
              highestPriceCoin={highestPriceCoin}
              biggestGainerCoin={biggestGainerCoin}
              biggestLoserCoin={biggestLoserCoin}
              mostCirculatingSupplyCoin={mostCirculatingSupplyCoin}
            />} />
            <Route path="/news" element={<News />} />
            <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} merchandiseItems={merchandiseItems}/>} />
            <Route path="checkout" element={<Checkout user={user}/>} />
            <Route path="cart" element={<Cart cart={cart} setCart={setCart} user={user} refresh={refresh} handleAddToCart={handleAddToCart} />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/profile" element={<Account user={user}/>} />
            <Route path="/orders" element={<Orders user={user}/>} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
          </Routes>
        )}
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && <Footer />}

    </div>
  );
}

export default App;
