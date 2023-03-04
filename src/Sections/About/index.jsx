import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
            สวัสดี (Hello)
          </p>
          <p className={styles.desc}>
            I'm Sorada Wright [Suzie]
          </p> 
          <p className={styles.desc}>
          I was born in Bangkok, Thailand and currently live in Newmarket, UK. I enjoy learning and developing myself and I have discovered a deeper passion for coding and web development. I worked through 500+ hours of bootcamp structure, learning to become a great front-end developer to chase my dream. I am a positive person, I have a strong can-do attitude and believe that I can become a coder.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/my_img.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;