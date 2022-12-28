import './App.css';
import Signup from "./components/SignUp"; 
import router from 'route-cli';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Signup/>

    </div>
  );
}

export default App;
