import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import ApartmentDetails from './components/ApartmentDetailsPage/ApartmentDetails/ApartmentDetails';

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>"
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/apartment">
        <ApartmentDetails />
      </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
