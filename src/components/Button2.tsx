import styles from "./button2.module.scss";
import Arrow_icon from "../assets/img/shared/desktop/arrow-black.svg";

interface Props {
	text: string;
}

const Button2: React.FC<Props> = ({ text = "This is my title" }) => {
	return (
		<div className={styles.button_2}>
			<span className={styles.btn_text}>{text}</span>
			<img src={Arrow_icon} alt="" className={styles.arrow_img} />
		</div>
	);
};

export default Button2;
