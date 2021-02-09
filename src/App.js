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
import Login2 from './components/Register/Login2';
import Zoom from './components/pages/Zoom';
import Calendar from './components/Calendar';
import SearchVideos from './components/SearchVideos/searchVideos';
import DisplayVideo from './components/SearchVideos/DisplayVideo';
import Updateform from './components/UpdateForm/Userupdateform';

function App() {
  return (
    
    <Router>


      <DashProvider>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/update" exact component={Updateform} />
          <Route path="/videoSearch" component={SearchVideos} />
          <Route path="/displayVideo" component={DisplayVideo} />
          <Route path="/login" component={Login} />
          <Route path="/UserLandingpage" component={UserLandingpage}/>
          <Route path="/InstructorLandingpage" component={InstructorLandingpage}/>
          <Route path='/Calendar' exact component={Calendar} />
        </Switch> 
      </DashProvider>
      <Footer />
    </Router>

  );
}

export default App;
