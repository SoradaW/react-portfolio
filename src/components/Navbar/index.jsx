import styles from "./styles.module.css";

function Navbar () {
  return (
    <nav className={styles.nav-container}>
      <div className={styles.nav-left}>
        <a href="#home">SW</a>
      </div>
      <div className={styles.nav-right}>
        <a href="#about" className={styles.nav-link}>
          <span>01.</span>About
        </a>
        <a href="#experience" className={styles.nav-link}>
          <span>02.</span>Experience
        </a>
        <a href="#work" className={styles.nav-link}>
          <span>03.</span>Work
        </a>
        <a href="#contact" className={styles.nav-link}>
          <span>04.</span>Contact
        </a>
        <button className={styles.nav-resume-btn}>Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;