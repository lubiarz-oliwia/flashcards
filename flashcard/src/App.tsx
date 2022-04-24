import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { userLoggedIn } from "./features/LoginForm/loginFormSlice";

import Navigation from "./components/Navigation/Navigation";
import UserProfile from "./features/Profile/UserProfile";
import HomePage from "./pages/HomePage/HomePage";
import LoginFormik from "./features/LoginForm/LoginForm";
import SetPage from "./pages/SetPage/SetPage";
import SetsPage from "./pages/SetsPage/SetsPage";

import "./App.css";

function App() {
 const loggedIn = useAppSelector(userLoggedIn);

 return (
  <BrowserRouter>
   <Navigation />
   <Routes>
    <Route index element={<HomePage />} />
    <Route path="login" element={<LoginFormik />} />
    <Route path="signup" element={<LoginFormik />} />
    {loggedIn && (
     <>
      <Route path="profile" element={<UserProfile />} />
      <Route path="collection" element={<SetsPage />} />
      <Route path="collection/:title" element={<SetPage />} />
     </>
    )}
   </Routes>
  </BrowserRouter>
 );
}

export default App;
