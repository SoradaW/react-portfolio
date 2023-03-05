import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi there, my name is</p>
			<h1 className={styles.heading_1}>Suzie.</h1>
			<h1 className={styles.heading_2}>I'm a big believer in learning by doing and having fun!</h1>
			<p className={styles.desc}>
      Motivated designer and developer with experience creating custom websites with ReactJS, NodeJS, ES6, jQuery, APIs, JavaScript, Bootstrap, CSS3, HTML5.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;