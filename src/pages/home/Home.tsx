import Button2 from "../../components/Button2";
import Button4 from "../../components/Button4";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import SingleCard from "../../components/SingleCard";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Navigation />

			<section className={styles.section_invite}>
				<div className={styles.section_invite_context}>
					<h2 className={` ${styles.invite_title} header_h1`}>Create and share your photo stories.</h2>
					<p className={styles.invite_text}>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
					<div className={styles.btn_wrapper}>
						<Button4 text="Get an invite" />
					</div>
				</div>
				<div className={styles.section_invite_bg_image}></div>
			</section>

			<section className={styles.section_stories}>
				<div className={styles.section_stories_bg_image}></div>
				<div className={styles.section_stories_context}>
					<h2 className={` ${styles.stories_title} header_h1`}>BEAUTIFUL STORIES EVERY TIME </h2>
					<p className={styles.stories_text}>
						We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
					</p>
					<div className={styles.btn_wrapper}>
						<Button2 text="View the stories" />
					</div>
				</div>
			</section>

			<section className={styles.section_designed}>
				<div className={styles.section_designed_context}>
					<h2 className={` ${styles.designed_title} header_h1`}>DESIGNED FOR EVERYONE</h2>
					<p className={styles.stories_text}>
						Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.{" "}
					</p>
					<div className={styles.btn_wrapper}>
						<Button2 text="View the stories" />
					</div>
				</div>
				<div className={styles.section_designed_bg_image}></div>
			</section>

			<section className={styles.section_gallery}>
				<SingleCard large_image_name="mountains.jpg" title="The Mountains" author="by John Appleseed" />
				<SingleCard large_image_name="cityscapes.jpg" title="Sunset Cityscapes" author="by Benjamin Cruz" />
				<SingleCard large_image_name="18-days-voyage.jpg" title="18 Days Voyage" author="by Alexei Borodin" />
				<SingleCard large_image_name="architecturals.jpg" title="Architecturals" author="by Samantha Brooke" />
			</section>

			<section className={styles.section_features}>
				<div className={styles.feature_wrapper}>
					<Feature
						icon_name="responsive.svg"
						title="100% Responsive"
						details="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
					/>
					<Feature
						icon_name="embed.svg"
						title="Available to Embed"
						details="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go. "
					/>
					<Feature icon_name="responsive.svg" title="100% Responsive" details="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. " />
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
