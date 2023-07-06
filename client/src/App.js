import axios from 'axios';
// import './App.css';
//import Chat from "./Chat.js";
import Register from "./Register";

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials =true;
  return (
    //<Chat/>
    <Register/>
  );
}

export default App;
