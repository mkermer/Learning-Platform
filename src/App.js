import './App.css';
import UserLandingpage from './User-Landingpage/UserLandingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Prov} from './DashContext';
import RegisterForm from './components/Register/RegisterForm'
import Login from './components/Login'

import ResetRedux from './components/ResetRedux';

function App() {
  return (
    <div className="App">
      <Prov />
      <UserLandingpage/>
      <RegisterForm />
      <Login />

    </div>
  );
}

export default App;
