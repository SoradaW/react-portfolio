import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<FacebookIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<WhatsAppIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:sorada.wright@gmail.com" className={styles.email}>
					sorada.wright@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;