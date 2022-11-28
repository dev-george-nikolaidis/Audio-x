import Navigation from "../../components/Navigation";
import styles from "./pricing.module.scss";
import { MdOutlineToggleOff } from "react-icons/md";
import { BsToggleOff } from "react-icons/bs";

const Pricing: React.FC = () => {
	return (
		<div className={styles.pricing}>
			<Navigation />
			<section className={styles.header}>
				<div className={styles.text_container}>
					<div className={styles.text_wrapper}>
						<h2 className={` ${styles.hero_title} header_h1`}>PRICING</h2>
						<p className={styles.text_paragraph}>
							Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.
						</p>
					</div>
				</div>
				<div className={styles.bg_image}></div>
			</section>

			<section className={styles.pricing_cards_container}>
				<div className={styles.toggle_container}>
					<span className={styles.month_text}>Monthly</span>
					<div>
						<MdOutlineToggleOff className={styles.toggle_icon} />
					</div>
					<span className={styles.year_text}>Yearly</span>
				</div>

				<div className={styles.cards_container}>
					<div className={styles.basic_wrapper}>
						<div className={styles.basic}>basic</div>
					</div>
					<div className={styles.pro}>pro</div>
					<div className={styles.business_wrapper}>
						<div className={styles.business}>business</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Pricing;
