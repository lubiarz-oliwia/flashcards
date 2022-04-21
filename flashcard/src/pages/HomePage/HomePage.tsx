import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

const HomePage = () => {
 return (
  <section className={styles.page}>
   <div className={styles.mainPage}>
    <h1>Do you want to keep all new words in one place?</h1>
    <h2>...and practice them everywhere?</h2>
    <h3>Join flashcards now.</h3>
    <Link to="/login">Login</Link>
   </div>
  </section>
 );
};

export default HomePage;
