
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
import AddService from './Pages/AddServices/AddService';
import Booking from './Pages/Booking/Booking';
import ManageServices from './Pages/ManageServices/ManageServices';

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
            <Route path="/doctors">
              <DoctorsAll>

              </DoctorsAll>
            </Route>
            <Route path="/addService">
              <AddService>

              </AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices>

              </ManageServices>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking>

              </Booking>
            </Route>
            {/* Protected Routes */}
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
            {/* Protected Routes */}

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
