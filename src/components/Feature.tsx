import styles from "./feature.module.scss";

interface Props {
	icon_name: string;
	title: string;
	details: string;
}

const Feature: React.FC<Props> = ({ icon_name, details, title }) => {
	const icon = require(`../assets/img/features/desktop/${icon_name}`);
	return (
		<div className={styles.feature}>
			<div className={styles.img_wrapper}>
				<img src={icon} alt="" className={styles.img} />
			</div>
			<h4 className={styles.feature_title}>{title}</h4>
			<p className={styles.feature_text}>{details}</p>
		</div>
	);
};

export default Feature;
