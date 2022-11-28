import Button4 from "./Button4";
import styles from "./slogan.module.scss";

const Slogan: React.FC = () => {
	return (
		<section className={styles.slogan}>
			<div className={styles.slogan_container}>
				<h2 className={` ${styles.slogan_title} header_h1`}>We’re in beta. Get your invite today!</h2>
				<div className={styles.btn_wrapper}>
					<Button4 text="Get an invite" />
				</div>
			</div>
		</section>
	);
};

export default Slogan;
