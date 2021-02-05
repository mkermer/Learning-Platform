import Home from './components/HomeUser/Home.js'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserLandingpage from './components/User-Landingpage/UserLandingpage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructorLandingpage from './Instructor-Landingpage/InstructorLandingpage'
import RegisterForm from './components/Register/RegisterForm';
import Login from './components/Login';
import Footer from "./components/FooterSection/Footer";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RegisterForm} />
        <Route path="/login" component={Login} />
        <Route path="/Home" component={Home} />
      </Switch>
      <Footer />
    </Router>


  );
}

export default App;
