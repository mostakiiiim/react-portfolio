import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import MoreInfo from './Pages/Home/MoreInfo/MoreInfo';
import Header from './Shared/Header/Header';
import Login from './Pages/Login/Firebase/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home>

            </Home>
          </Route>
          <Route path="/home">
            <Home>

            </Home>
          </Route>
          <Route path="/doctors">
            <Home>

            </Home>
          </Route>
          <Route path="/appointment">
            <Appointment>

            </Appointment>
          </Route>
          <Route path="/service/:serviceId">
            <MoreInfo>

            </MoreInfo>
          </Route>
          <Route path="/login">
            <Login>

            </Login>
          </Route>
          <Route path="*">
            <NotFound>

            </NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
