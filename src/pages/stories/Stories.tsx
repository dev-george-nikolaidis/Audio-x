import Button4 from "../../components/Button4";
import Navigation from "../../components/Navigation";
import styles from "./stories.module.scss";
import { gallery_data } from "../../data/data";
import SingleCard from "../../components/SingleCard";

const Stories: React.FC = () => {
	let display_gallery = gallery_data.map((card: any) => {
		const { image_name, time, title, author } = card;

		return <SingleCard author={author} large_image_name={image_name} title={title} />;
	});

	return (
		<div className={styles.stories}>
			<Navigation />
			<section className={styles.section_hero}>
				<div className={styles.bg_image_hero}></div>
				<div className={styles.hero_text_container}>
					<h4 className={styles.sub_title}>LAST MONTH’S FEATURED STORY </h4>
					<h2 className={` ${styles.hero_title} header_h1`}>HAZY FULL MOON OF APPALACHIA</h2>
					<div className={styles.author_container}>
						<p className={styles.time}>March 2nd 2020</p>
						<p className={styles.name}>by John Appleseed</p>
					</div>
					<p className={styles.paragraph}>
						The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while
						the ridges are not high, the terrain is extremely rugged.
					</p>
					<div className={styles.btn_wrapper}>
						<Button4 text="Read the story" />
					</div>
				</div>
			</section>

			<section className={styles.section_gallery}>
				{/* <div className={styles.gallery_wrapper}> */}
				{display_gallery}
				{/* </div> */}
			</section>
		</div>
	);
};

export default Stories;
