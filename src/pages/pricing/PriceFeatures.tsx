import styles from "./priceFeatures.module.scss";
import Arrow_icon from "../../assets/img/pricing/desktop/check.svg";
import { compare_packages } from "../../data/data";

const PriceFeatures: React.FC = () => {
	let display_perks = compare_packages.map((p: any, index) => {
		const { perk_name, basic, pro, business } = p;

		return (
			<div className={styles.table_row} key={index}>
				<div className={styles.td_text}>{perk_name}</div>
				<div className={styles.td_basic}>{basic && <img src={Arrow_icon} alt="" className={styles.arrow_img} />}</div>
				<div className={styles.td_pro}>{pro && <img src={Arrow_icon} alt="" className={styles.arrow_img} />}</div>
				<div className={styles.td_business}>{business && <img src={Arrow_icon} alt="" className={styles.arrow_img} />}</div>
			</div>
		);
	});

	let display_perks_mobile = compare_packages.map((p: any, index) => {
		const { perk_name, basic, pro, business } = p;

		return (
			<div className={styles.perk_single} key={index}>
				<h5 className={styles.m_perk_title}>{perk_name}</h5>
				<div className={styles.perk_container}>
					<div className={styles.basic_container}>
						<p className={styles.basic_label}>Basic</p>
						<div className={styles.basic_icon_container}>{basic && <img src={Arrow_icon} alt="" className={styles.arrow_img} />}</div>
					</div>
					<div className={styles.pro_container}>
						<p className={styles.pro_label}>Pro</p>
						<div className={styles.pro_icon_container}>{pro && <img src={Arrow_icon} alt="" className={styles.arrow_img} />}</div>
					</div>
					<div className={styles.business_container}>
						<p className={styles.business_label}>Business</p>
						<div className={styles.business_icon_container}>{business && <img src={Arrow_icon} alt="" className={styles.arrow_img} />}</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className={styles.PriceFeatures}>
			<h2 className={` ${styles.title} header_h1`}>Compare</h2>

			<div className={styles.container}>
				<div className={styles.table_header}>
					<div className={styles.td_text}>THE FEATURES</div>
					<div className={styles.td_basic}>BASIC</div>
					<div className={styles.td_pro}>PRO</div>
					<div className={styles.td_business}>BUSINESS</div>
				</div>
				{display_perks}
			</div>

			<div className={styles.mobile_container}>
				<h4 className={styles.m_title}>THE FEATURES</h4>
				{display_perks_mobile}
			</div>
		</div>
	);
};

export default PriceFeatures;
