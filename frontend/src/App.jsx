import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import axios from "axios";
import UserContextProvider from "../context/userContext.jsx";
import Dashboard from './pages/Dashboard.jsx';
 
axios.defaults.withCredentials = true;
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </UserContextProvider>
  )
}

export default App
