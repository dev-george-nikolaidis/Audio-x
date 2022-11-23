import styles from "./single_card.module.scss";
import Arrow_white from "../assets/img/shared/desktop/arrow-white.svg";

interface Props {
	large_image_name: string;
	title: string;
	author: string;
}

const SingleCard: React.FC<Props> = ({ large_image_name, title, author }) => {
	const large_image = require(`../assets/img/stories/desktop/${large_image_name}`);
	const small_image = require(`../assets/img/stories/mobile/${large_image_name}`);

	return (
		<div className={styles.single_card}>
			<img srcSet={`${large_image} 760w , ${small_image} 600w `} className={styles.card_image} width={"100%"} />
			<div className={styles.bg_filter}></div>
			<h3 className={styles.single_card_title}>{title}</h3>
			<p className={styles.single_card_text}>{author}</p>
			<div className={styles.line}></div>
			<div className={styles.btn_container}>
				<span className={styles.btn_text}>READ STORY</span>
				<img src={Arrow_white} alt="" />
			</div>
		</div>
	);
};

export default SingleCard;
