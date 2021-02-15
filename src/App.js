import React, { Fragment } from 'react';
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
import Home from './components/LandingPage/Home';
import Zoom from './scheduler/Zoom';
import Calendar from './components/Calendar';
import SearchVideos from './components/SearchVideos/searchVideos';
import DisplayVideo from './components/SearchVideos/DisplayVideo';
import Updateform from './components/UpdateForm/Userupdateform';
import Scheduler from "./scheduler/Scheduler";
import CategoryCoding from './components/SearchVideos/CategoryCoding';
import CategoryMusic from './components/SearchVideos/CategoryMusic';
import CategoryTechnologies from './components/SearchVideos/CategoryTechnologies';
import Page404 from './Page404';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app.action';

function App(props) {

  if(props.applicationState.user !== false){
  return(


    <Router>


      <DashProvider>
        <Sidebar />
        
        <Switch>
          
          <Route path="/Home" component={Home} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/update" exact component={Updateform} />
          <Route path="/videoSearch" component={SearchVideos} />
          <Route path="/displayVideo" component={DisplayVideo} />
          <Route path="/login" component={Login} />
          <Route path="/UserLandingpage" component={UserLandingpage}/>
          <Route path="/InstructorLandingpage" component={InstructorLandingpage}/>
          <Route path='/Calendar' exact component={Calendar} />
          <Route path='/scheduler' exact component={Scheduler} />
          <Route path="/" component={Home} />
          <Route path="*" component={Page404}/>

        </Switch> 
      </DashProvider>
      <Footer />
     
    </Router>

  );
  }
  else{
    return(
      <Router>


      <DashProvider>
      <Sidebar />
        <Switch>
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
          <Route path="*" component={Page404}/>
        </Switch> 

      </DashProvider>
      <Footer />
    </Router>
    )
  }
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(App);
