import { Route, Routes} from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup.jsx";
import Dashboard from "./pages/dashboard";


function App() {
  
  const [isLoggedin , setlogin] = useState(false);

  return (
    <div>

      <Navbar isLoggedin={isLoggedin} setlogin={setlogin}></Navbar>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setlogin={setlogin}/>}></Route>
        <Route path="/signup" element={<Signup setlogin={setlogin}/>} ></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes> 
      
    </div>
  )
}

export default App;
