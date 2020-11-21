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
import MyRent from './components/DashboardPage/MyRent/MyRent';
import Booking from './components/DashboardPage/Booking/Booking';
import AddHouse from './components/DashboardPage/AddHouse/AddHouse';
import MakeAdmin from './components/DashboardPage/MakeAdmin/MakeAdmin';
import ViewRent from './components/DashboardPage/MyRent/ViewRent/ViewRent';
function App() {
  return (
    <div>
      <Router>
        <Switch>"
        <Route exact path="/home">
            <Home />
          </Route>
      <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/apartment">
            <ApartmentDetails />
          </PrivateRoute>
          <PrivateRoute path="/myRent">
           <MyRent/>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
           <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/addRent">
           <AddHouse></AddHouse>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
           <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/viewDetails">
           <ViewRent/>
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
