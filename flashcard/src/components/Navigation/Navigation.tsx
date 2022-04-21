import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
 return (
  <nav className={styles.nav}>
   <div className={styles.logo}>Flashcards</div>
   <ul>
    <Link to="/profile">Profile</Link>
    <Link to="/login">Login</Link>
   </ul>
  </nav>
 );
}

export default Navigation;
