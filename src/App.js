import Home from './components/HomeUser/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Prov} from './DashContext';
import RegisterForm from './components/Register/RegisterForm';
import Login from './components/Login';
// import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/HomeUser/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
        <Switch>
        <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />

          {/* <Route path="/Instructorlandingpage" component={InstructorLandingpage} /> */}
          <Route path="/Home" component={Home}/>
        </Switch> 
    </Router>

  );
}

export default App;
