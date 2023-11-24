import './App.css';
import Courses from './components/Courses';
import Home from './components/Home';
import LogIn from './components/Login';
import About from './components/About';
import Markets from './components/Markets';
import News from './components/News';
import Shop from './components/Shop';
import router from 'route-cli';
import {BrowserRouter, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="login" element={<LogIn />} />
              <Route path="about" element={<About />} />
              <Route path="markets" element={<Markets />} />
              <Route path="news" element={<News />} />
              <Route path="shop" element={<Shop />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
