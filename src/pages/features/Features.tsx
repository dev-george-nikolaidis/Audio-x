import Navigation from "../../components/Navigation";
import styles from "./features.module.scss";
import { features } from "../../data/data";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Slogan from "../../components/Slogan";

const Features: React.FC = () => {
	let displayPerks = features.map((feature: any, index) => {
		const { icon_name, title, details } = feature;
		return <Feature icon_name={icon_name} title={title} details={details} key={index} />;
	});

	return (
		<div className={styles.features}>
			<Navigation />
			<section className={styles.header}>
				<div className={styles.text_container}>
					<div className={styles.text_wrapper}>
						<h2 className={` ${styles.hero_title} header_h1`}>FEATURES</h2>
						<p className={styles.text_paragraph}>
							We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.
						</p>
					</div>
				</div>
				<div className={styles.bg_image}></div>
			</section>

			<section className={styles.perks}>{displayPerks}</section>
			<Slogan />
			<Footer />
		</div>
	);
};

export default Features;
