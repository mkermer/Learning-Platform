import './App.css';
import UserLandingpage from './User-Landingpage/UserLandingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Prov } from './DashContext';
import RegisterForm from './components/Register/RegisterForm'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InstructorLandingpage from './Instructor-Landingpage/InstructorLandingpage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />
          <Route path="/Userlandingpage" component={UserLandingpage} />
          <Route path="/Instructorlandingpage" component={InstructorLandingpage} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
