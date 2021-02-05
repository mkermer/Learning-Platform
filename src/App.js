import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserLandingpage from './components/User-Landingpage/UserLandingpage';
import './App.css';
import UserLandingpage from './User-Landingpage/UserLandingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Prov } from './DashContext';
import RegisterForm from './components/Register/RegisterForm'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/FooterSection/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />
          <Route path="/Userlandingpage" component={UserLandingpage} />
        </Switch>
        <Footer /> 
      </div>
    </Router>


  );
}

export default App;
