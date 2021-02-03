import './App.css';
import UserLandingpage from './User-Landingpage/UserLandingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Prov} from './DashContext';
import RegisterForm from './components/Register/RegisterForm'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetRedux from './components/ResetRedux';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" component={RegisterForm}/>
        <Route path="/UserLandingpage" component={UserLandingpage}/>
      </Switch>   
      </div>
    </Router>
      
  );
}

export default App;
