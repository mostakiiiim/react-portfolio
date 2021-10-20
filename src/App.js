
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import MoreInfo from './Pages/Home/MoreInfo/MoreInfo';
import Header from './Shared/Header/Header';
import Login from './Pages/Login/Firebase/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DoctorsAll from './Pages/DoctorsAll/DoctorsAll/DoctorsAll';
import Footer from './Shared/Footer/Footer';
import Departments from './Pages/Derpartments/Departments/Departments';
import BillPay from './Pages/BillPay/BillPay';

function App() {
  return (
    <div className="App">

      <AuthProvider>
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
            <PrivateRoute path="/doctors">
              <DoctorsAll>

              </DoctorsAll>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment>

              </Appointment>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Departments></Departments>
            </PrivateRoute>
            <PrivateRoute path="/billing">
              <BillPay></BillPay>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <MoreInfo>

              </MoreInfo>
            </PrivateRoute>
            <Route path="/login">
              <Login>

              </Login>
            </Route>
            <Route path="*">
              <NotFound>

              </NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
