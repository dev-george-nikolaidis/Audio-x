import styles from "./button_4.module.scss";
import Arrow_icon from "../assets/img/shared/desktop/arrow-white.svg";
interface Props {
	text: string;
}
const Button_4: React.FC<Props> = ({ text = "Button 4" }) => {
	return (
		<div className={styles.button_4}>
			<span className={styles.btn_text}>{text}</span>
			<img src={Arrow_icon} alt="" className={styles.arrow_img} />
		</div>
	);
};

export default Button_4;
