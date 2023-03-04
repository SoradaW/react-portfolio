import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi there, my name is</p>
			<h1 className={styles.heading_1}>Suzie.</h1>
			<h1 className={styles.heading_2}>I'm a big believer in learning by doing and having fun!</h1>
			<p className={styles.desc}>
				I enjoy learning and developing myself and I have discovered a deeper passion for coding and web development. 
        I worked through 500+ hours of bootcamp structure, learning to become a great front-end developer to chase my dream. 
        I am a positive person, I have a strong can-do attitude and I believe that I can become a coder. 
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;