import React from 'react';
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
<<<<<<< HEAD
import Login2 from './components/Register/Login2';
import Zoom from './scheduler/Zoom';
=======
import Zoom from './components/pages/Zoom';
>>>>>>> 1952632060df6fada18007a1eba8681928616849
import Calendar from './components/Calendar';
import SearchVideos from './components/SearchVideos/searchVideos';
import DisplayVideo from './components/SearchVideos/DisplayVideo';
import Updateform from './components/UpdateForm/Userupdateform';
<<<<<<< HEAD
import Scheduler from "./scheduler/Scheduler";
function App() {
  return (
    
=======
import CategoryCoding from './components/SearchVideos/CategoryCoding';
import CategoryMusic from './components/SearchVideos/CategoryMusic';
import CategoryTechnologies from './components/SearchVideos/CategoryTechnologies';

function App() {
  return (

>>>>>>> 1952632060df6fada18007a1eba8681928616849
    <Router>


      <DashProvider>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/update" exact component={Updateform} />
          <Route path="/videoSearch" component={SearchVideos} />
          <Route path="/videoCoding" component={CategoryCoding} />
          <Route path="/videoMusic" component={CategoryMusic} />
          <Route path="/videoTechnologies" component={CategoryTechnologies} />
          <Route path="/displayVideo" component={DisplayVideo} />
          <Route path="/login" component={Login} />
          <Route path="/UserLandingpage" component={UserLandingpage} />
          <Route path="/InstructorLandingpage" component={InstructorLandingpage} />
          <Route path='/Calendar' exact component={Calendar} />
<<<<<<< HEAD
          <Route path='/scheduler' exact component={Scheduler} />
        </Switch> 
=======
        </Switch>
>>>>>>> 1952632060df6fada18007a1eba8681928616849
      </DashProvider>
      <Footer />
    </Router>

  );
}

export default App;
