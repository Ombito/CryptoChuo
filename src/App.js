import './App.css';
import Signup from "./components/SignUp"; 
import LogIn from './components/Login';
import router from 'route-cli';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <LogIn/>

    </div>
  );
}

export default App;
