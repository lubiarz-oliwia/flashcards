import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
 currentUser,
 deleteUser,
} from "../../features/LoginForm/loginFormSlice";

import styles from "./Navigation.module.css";

function Navigation() {
 const loggedIn = useAppSelector(currentUser);
 const dispatch = useAppDispatch();

 const logoutHandler = () => {
  dispatch(deleteUser());
 };

 return (
  <nav className={styles.nav}>
   <div className={styles.logo}>Flashcards</div>
   <ul>
    {loggedIn !== "" ? (
     <>
      <Link to="/collection">Collection</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout" onClick={logoutHandler}>
       Logout
      </Link>
     </>
    ) : (
     <Link to="/login">Login</Link>
    )}
   </ul>
  </nav>
 );
}

export default Navigation;
