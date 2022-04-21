import React from "react";

import LoginFormik from "./features/LoginForm/LoginForm";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserProfile from "./features/Profile/UserProfile";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
 return (
  <BrowserRouter>
  <Navigation/>
   <Routes>
    <Route index element={<HomePage />} />
    <Route path="login" element={<LoginFormik />} />
    <Route path="signup" element={<LoginFormik />} />
    <Route path="profile" element={<UserProfile />} />
   </Routes>
   <Footer />
  </BrowserRouter>
 );
}

export default App;
