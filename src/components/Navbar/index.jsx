import styles from "./styles.module.css";

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">SW</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>About
				</a>
				<a href="#work" className={styles.nav_link}>
					<span>02.</span>Projects
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>03.</span>Contact
				</a>
        <a href="https://docs.google.com/document/d/1JHg4QGCsVO6benOGlWboUEV9vOH4B591cz0wQwZXuAw/edit?usp=sharing" target="_blank" className={styles.nav_link}>
					<span>04.</span>Resume
				</a>
			</div>
		</nav>
	);
}

export default Navbar;