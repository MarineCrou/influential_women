import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Signup from "./components/signup";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Login from "./components/login";
import SingleProfilePage from "./components/SingleProfilePage";
import axios from "axios";
import { baseUrl } from "./config";
import EditProfile from "./components/EditProfile";
import CreateNewProfile from "./components/CreateProfilePage";
import Account from "./components/Account";

function App() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`${baseUrl}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(resp.data);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
  }, []);

  console.log("User in app.tx:", user);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  HOME PAGE => Features hero baner (women + h1) + Feature woman of the month + list of all women */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/profile/:id"
          element={<SingleProfilePage user={user} setUser={setUser} />}
        />{" "}
        {/* detailed profile page*/}
        <Route path="/women/NewProfile" element={<CreateNewProfile />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
        <Route path="/signup" element={<Signup />} /> {/* - Sign up page  */}
        <Route path="/login" element={<Login fetchUser={fetchUser} />} />
        <Route
          path="/account"
          element={<Account user={user} fetchUser={fetchUser} />}
        />
        {/* Routes : 
      Stretch Goals : 

      - Backend Admin where all pending contributions are waiting to be reviewed
           - Delete profile => admin rights 
           - Approve, deny contributions before being published */}
      </Routes>
    </Router>
  );
}

export default App;
