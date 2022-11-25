import styles from "./footer.module.scss";
import Logo from "./Logo";
import Facebook_icon from "../assets/img/shared/desktop/facebook.svg";
import Youtube_icon from "../assets/img/shared/desktop/youtube.svg";
import Twitter_icon from "../assets/img/shared/desktop/twitter.svg";
import Pinterest_icon from "../assets/img/shared/desktop/pinterest.svg";
import Instagram_icon from "../assets/img/shared/desktop/instagram.svg";
import { Link } from "react-router-dom";

import Button4 from "./Button4";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<div className={styles.logo_socials}>
					<div className={styles.logo_container}>
						<Logo color="#fff" />
					</div>
					<div className={styles.logos_container}>
						<img src={Facebook_icon} alt="" />
						<img src={Youtube_icon} alt="" />
						<img src={Twitter_icon} alt="" />
						<img src={Pinterest_icon} alt="" />
						<img src={Instagram_icon} alt="" />
					</div>
				</div>

				<div className={styles.links_container}>
					<Link to="/" className={styles.link}>
						Home
					</Link>
					<Link to="/stories" className={styles.link}>
						Stories
					</Link>
					<Link to="/features" className={styles.link}>
						Features
					</Link>
					<Link to="/pricing" className={styles.link}>
						pricing
					</Link>
				</div>

				<div className={styles.copy_container}>
					<div className={styles.btn_wrapper}>
						<Button4 text="get an invite" />
					</div>
					<p className={styles.copy_text}> Copyright &copy; {new Date().getFullYear()}. All Rights Reserved </p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
