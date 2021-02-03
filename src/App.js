import './App.css';
import UserLandingpage from './User-Landingpage/UserLandingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Prov} from './DashContext';

function App() {
  return (
    <div className="App">
      <Prov />
      <UserLandingpage/>
    </div>
  );
}

export default App;
