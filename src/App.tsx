import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Signup from "./components/signup";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Login from "./components/login";
import SingleProfilePage from "./components/SingleProfilePage";

function App() {
  <p>hello !</p>;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  HOME PAGE => Features hero baner (women + h1) + Feature woman of the month + list of all women */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile/:id" element={<SingleProfilePage />} />
        {/* Single profile page - For detailed info*/}
        {/* Routes : 
      - Edit profile page => contributors
      - Create new profile page => contributor
      
      Stretch Goals : 
      - Get Contributor backend listing all of theur contributions and status for each 
      - Backend Admin where all pending contributions are waiting to be reviewed*/}
        {/* <Route path="/login" element={Login} /> */}
        <Route path="/signup" element={<Signup />} /> {/* - Sign up page  */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
      </Routes>
    </Router>
  );
}

export default App;
