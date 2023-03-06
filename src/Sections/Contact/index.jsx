import Heading from "../../components/Heading";
import styles from "./styles.module.css";

function Contact() {
	return (
		<section className={styles.contact_section} id="contact">
			<div className={styles.heading_1}>
				<Heading index="03" heading="What's Next" />
			</div>
			<h1 className={styles.heading_2}>Get In Touch</h1>
			<p className={styles.desc}>
        Feel free to contact me! Whether you want to get in touch, or talk about a project collaboration. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
			</p>
			<a href="mailto:sorada.wright@gmail.com">
				<button className={styles.btn}>Say Hello</button>
			</a>
		</section>
	);
}

export default Contact;
