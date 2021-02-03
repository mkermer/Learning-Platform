import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserLandingpage from './components/User-Landingpage/UserLandingpage';
import './App.css';

import Footer from "./components/FooterSection/Footer";

function App() {
  return (
    <div className="App">
      <UserLandingpage/>

     <Router>
     </Router>
     <Footer /> 
  </div>
   
  );
}

export default App;
