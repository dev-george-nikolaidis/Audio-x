import styles from "./navigation.module.scss";
import Logo from "../assets/img/shared/desktop/logo.svg";

// Libraries
import { NavLink } from "react-router-dom";
import { useGeneralContext } from "../context/GeneralContext";

const Navigation: React.FC = () => {
	const {
		state: {},
	} = useGeneralContext();
	return (
		<nav className={styles.navigation}>
			<div className={styles.logo_wrapper}>
				<NavLink to="/" end>
					<img src={Logo} alt="" className={styles.logo} />
				</NavLink>
			</div>
			<ul className={styles.list}>
				<li>
					<NavLink to="/" end className={({ isActive }) => (isActive ? ` ${styles.active} ` : `${styles.inactive}`)}>
						<span className={styles.span_text}> Stories</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/media/movies" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
						<span className={styles.span_text}> Features</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/media/movies/filter" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
						<span className={styles.span_text}> Pricing</span>
					</NavLink>
				</li>
			</ul>

			<div className={styles.user_links}>
				<li>
					<NavLink to="/user/login" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
						<span className={styles.link_cta}> Get An invite</span>
					</NavLink>
				</li>
			</div>
		</nav>
	);
};

export default Navigation;
