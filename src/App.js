import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserLandingpage from './components/User-Landingpage/UserLandingpage';
import './App.css';
import RegisterForm from './components/Register/RegisterForm'
import Login from './components/Login'

import ResetRedux from './components/ResetRedux';

import Footer from "./components/FooterSection/Footer";

function App() {
  return (
    <div className="App">

      
      <UserLandingpage/>

     <Router>
     
     </Router>
    
  

      <RegisterForm />
      <Login />
      <Footer /> 
    </div>

  );
}

export default App;
