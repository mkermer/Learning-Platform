import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserLandingpage from './components/User-Landingpage/UserLandingpage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructorLandingpage from './components/Instructor-Landingpage/InstructorLandingpage'
import RegisterForm from './components/Register/RegisterForm';
import Login from './components/Register/Login';
import Footer from "./components/FooterSection/Footer";
import Sidebar from './components/HomeUser/Sidebar';
import { DashProvider } from './DashContext'
import Login2 from './components/Register/Login2';
import Zoom from './components/pages/Zoom';
function App() {
  return (
    <Router>


      <DashProvider>
        
        <Sidebar />

        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />
          <Route path="/UserLandingpage" component={UserLandingpage}/>
          <Route path="/InstructorLandingpage" component={InstructorLandingpage}/>
          <Route path='/Zoom' exact component={Zoom} />
        </Switch> 
      </DashProvider>
      <Footer />
     
    </Router> 

    // <Login />


  );
}

export default App;
