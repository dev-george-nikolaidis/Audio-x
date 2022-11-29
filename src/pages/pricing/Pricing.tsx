import Navigation from "../../components/Navigation";
import styles from "./pricing.module.scss";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";
import { BsToggleOff } from "react-icons/bs";
import { useState } from "react";
import Slogan from "../../components/Slogan";
import Footer from "../../components/Footer";
import PriceFeatures from "./PriceFeatures";

const Pricing: React.FC = () => {
	const [toggled, setToggled] = useState(true);

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
					<span className={toggled ? styles.monthly_text_active : styles.monthly_text}>Monthly</span>
					<div onClick={() => setToggled(!toggled)}>{toggled ? <MdOutlineToggleOff className={styles.toggle_icon} /> : <MdOutlineToggleOn className={styles.toggle_icon} />}</div>
					<span className={toggled ? styles.year_text : styles.year_text_active}>Yearly</span>
				</div>

				<div className={styles.cards_container}>
					<div className={styles.basic_wrapper}>
						<div className={styles.basic}>
							<h4 className={styles.plan_title}>Basic</h4>
							<p className={styles.plant_text}>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
							{toggled ? (
								<span className={styles.price_container}>
									<p className={styles.plan_yearly_price}>$19.00</p>
									<p className={styles.price_sub_text}>per month</p>
								</span>
							) : (
								<span className={styles.price_container}>
									<p className={styles.plan_monthly_price}>$13.00</p>
									<p className={styles.price_sub_text}>yearly</p>
								</span>
							)}
							<button className={styles.btn_price}>Pick plan</button>
						</div>
					</div>
					<div className={styles.pro}>
						<h4 className={styles.plan_title}>Pro</h4>
						<p className={`${styles.plant_text} ${styles.plant_text_pro}`}>More advanced features available. Recommended for photography veterans and professionals.</p>
						{toggled ? (
							<span className={styles.price_container}>
								<p className={`${styles.plan_yearly_price}`}>$39.00</p>
								<p className={`${styles.price_sub_text} ${styles.price_sub_text_pro}`}>per month</p>
							</span>
						) : (
							<span className={styles.price_container}>
								<p className={styles.plan_monthly_price}>$29.99</p>
								<p className={`${styles.price_sub_text}${styles.price_sub_text_pro}`}>yearly</p>
							</span>
						)}
						<button className={`${styles.btn_price} ${styles.btn_price_pro}`}>Pick plan</button>
					</div>
					<div className={styles.business_wrapper}>
						<div className={styles.business}>
							<h4 className={styles.plan_title}>Business</h4>
							<p className={styles.plant_text}>Additional features available such as more detailed metrics. Recommended for business owners.</p>
							{toggled ? (
								<span className={styles.price_container}>
									<p className={styles.plan_yearly_price}>$99.00</p>
									<p className={`${styles.price_sub_text} `}>per month</p>
								</span>
							) : (
								<span className={styles.price_container}>
									<p className={styles.plan_monthly_price}>$75.00</p>
									<p className={` ${styles.price_sub_text} `}>yearly</p>
								</span>
							)}
							<button className={`${styles.btn_price}`}>Pick plan</button>
						</div>
					</div>
				</div>
			</section>
			<PriceFeatures />
			<Slogan />
			<Footer />
		</div>
	);
};

export default Pricing;
