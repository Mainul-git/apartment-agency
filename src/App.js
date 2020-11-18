import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import ApartmentDetails from './components/ApartmentDetailsPage/ApartmentDetails/ApartmentDetails';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Switch>"
      <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/apartment">
            <ApartmentDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
