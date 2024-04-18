import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Signup from "./components/signup";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

function App() {
  <p>hello !</p>;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Routes : 
      - HOME PAGE => 
            => Features hero baner (women + h1)
            => Feature woman of the month 
            => all of the women
      - individual profile page (that features latest APPROVED contribution)
      - Sign up page 
      - Login Page
      - Edit profile page => contributors
      - Create new profile page => contributor
      
      Stretch Goals : 
      - Get Contributor backend listing all of theur contributions and status for each 
      - Backend Admin where all pending contributions are waiting to be reviewed*/}
        {/* <Route path="/login" element={Login} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
