import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar/navbar';
import Annonce from './components/Annonce/Annonce';
import MyHome from './components/Home/MyHome';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Dashboard from './components/Admin/Dashboard';
import Sidenav from './components/Sidenav/Sidenav';
 
 
function App() {
  return (
    <BrowserRouter>
     
    <Navbar/>
    <Routes>
    <Route path="/Annonce" element={<Annonce/>} exact />
    <Route path="/" element={<MyHome/>} exact />
    <Route path="/Login" element={<Login/>} exact />
    <Route path="/SignUp" element={<SignUp/>} exact />
    <Route path="/Dashboard" element={<Dashboard/>} exact />
    <Route path="/Sidenav" element={<Sidenav/>} exact />
     
    </Routes>
 
    </BrowserRouter>
  );
}

export default App;
