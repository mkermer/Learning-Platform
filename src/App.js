import Home from './components/HomeUser/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {DashProvider} from './DashContext';
import RegisterForm from './components/Register/RegisterForm';
import Login from './components/Login';
// import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <DashProvider>
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />

          {/* <Route path="/Instructorlandingpage" component={InstructorLandingpage} /> */}
          <Route path="/Home" component={Home}/>
        </Switch> 
      </DashProvider>
    </Router>

  );
}

export default App;
