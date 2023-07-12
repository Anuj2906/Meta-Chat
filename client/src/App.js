// import axios from 'axios';
import { Routes, Route, Navigate } from "react-router-dom";
// import './App.css';
import Chat from "./components/Chat.js";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContext } from "./context/AuthContext.js";
import { useContext } from "react";
// import { Container } from "react-bootstrap";

function App() {
  const { user } = useContext(AuthContext);
  // axios.defaults.baseURL = 'http://localhost:4040';
  // axios.defaults.withCredentials =true;
  return (
    <>
      <Routes>
        <Route path="/chat" element={user ? <Chat/> : <Login/>}/>
        <Route path="/register" element={user ? <Chat/> : <Register/>}/>
        <Route path="/login" element={user ? <Chat/> : <Login/>}/>
        <Route path="*" element={<Navigate to="/login"/>} /> 
        {/* The above line is for redirecting user to login page if he/she hits a random route */}
      </Routes>
    </>
  );
}

export default App;
