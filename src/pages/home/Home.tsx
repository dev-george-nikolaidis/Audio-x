import Button_4 from "../../components/Button_4";
import Navigation from "../../components/Navigation";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Navigation />
			<section className={styles.section_invite}>
				<div className={styles.section_invite_context}>
					<h2 className={` ${styles.invite_title} header_h1`}>Create and share your photo stories.</h2>
					<p className={styles.invite_text}>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
					<div className={styles.btn_wrapper}>
						<Button_4 text="Get an invite" />
					</div>
				</div>
				<div className={styles.section_invite_bg_image}></div>
			</section>
		</div>
	);
};

export default Home;
