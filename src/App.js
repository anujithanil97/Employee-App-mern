import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
// import UserLogin from './components/UserLogin';
import Userdashboard from './components/Userdashboard';
import LoginUser from './components/LoginUser';
import AdminLogin from './components/AdminLogin';
import Admindashboard from './components/Admindashboard';
import EmployeeForm from './components/EmployeeForm';
import TDashboard from './components/TDashboard';
import Editform from './components/Editform';
import Home from './components/Home';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/register" element={<Register/>}></Route>
      {/* <Route path="/user-login" element={<UserLogin/>}></Route> */}
      <Route path="/login-user" element={<LoginUser/>}></Route>
      <Route path="/user-dashboard" element={<Userdashboard/>}></Route>
      <Route path="/admin-login" element={<AdminLogin/>}></Route>
      <Route path="/admin-dashboard" element={<Admindashboard/>}></Route>
      <Route path="/empdataEntry" element={<EmployeeForm/>}></Route>
      <Route path="/tdashboard" element={<TDashboard/>}></Route>
      <Route path="/updateEmployee/:id" element={<Editform/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      


     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
