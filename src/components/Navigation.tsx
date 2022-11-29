import styles from "./navigation.module.scss";
import Logo from "../assets/img/shared/desktop/logo.svg";

// Libraries
import { NavLink } from "react-router-dom";
import { useGeneralContext } from "../context/GeneralContext";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navigation: React.FC = () => {
	const {
		state: {},
	} = useGeneralContext();

	const [displayMenu, setDisplayMenu] = useState(false);

	// const handler_click = () => {};
	return (
		<nav className={styles.navigation}>
			<div className={styles.logo_wrapper}>
				<NavLink to="/" end>
					<img src={Logo} alt="" className={styles.logo} />
				</NavLink>
			</div>
			<ul className={styles.list}>
				<li>
					<NavLink to="/stories" end className={({ isActive }) => (isActive ? ` ${styles.active} ` : `${styles.inactive}`)}>
						<span className={styles.span_text}> Stories</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/features" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
						<span className={styles.span_text}> Features</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
						<span className={styles.span_text}> Pricing</span>
					</NavLink>
				</li>
			</ul>

			<div className={styles.user_links}>
				<li>
					<NavLink to="/" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
						<span className={styles.link_cta}> Get An invite</span>
					</NavLink>
				</li>
			</div>

			<div className={styles.hamburger_menu} onClick={() => setDisplayMenu(!displayMenu)}>
				{!displayMenu ? (
					<>
						<div className={styles.line_1}></div>
						<div className={styles.line_2}></div>
					</>
				) : (
					<MdClose className={styles.close_icon} />
				)}
			</div>
			{displayMenu ? (
				<>
					<div className={styles.menu_modal}>
						<ul className={styles.list_modal}>
							<li>
								<NavLink to="/stories" end className={({ isActive }) => (isActive ? ` ${styles.active} ` : `${styles.inactive}`)}>
									<span className={styles.span_text}> Stories</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/features" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
									<span className={styles.span_text}> Features</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
									<span className={styles.span_text}> Pricing</span>
								</NavLink>
							</li>
						</ul>

						<div className={styles.modal_line}></div>
						<div className={styles.btn_modal}>
							<NavLink to="/" end className={({ isActive }) => (isActive ? ` ${styles.active}  active` : `${styles.inactive}`)}>
								<span className={styles.link_cta}> Get An invite</span>
							</NavLink>
						</div>
					</div>
				</>
			) : null}
		</nav>
	);
};

export default Navigation;
