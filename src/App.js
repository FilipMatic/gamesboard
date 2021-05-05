import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './home/Layout'
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/temp">
            <Dashboard />
          </Route> */}
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/"> 
            <Layout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
