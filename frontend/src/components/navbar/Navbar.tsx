import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Laptop, Book, SquareTerminal } from "lucide-react";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? `${styles.name} ${styles.active}` : styles.name
				}
			>
				Mattias Gil Johansson
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? `${styles.nameSmall} ${styles.active}`
						: styles.nameSmall
				}
				to="/"
			>
				Mattias
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive }) =>
					isActive
						? `${styles.navLink} ${styles.active}`
						: styles.navLink
				}
			>
				About <Book />
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? `${styles.navLink} ${styles.active}`
						: styles.navLink
				}
				to="/projects"
			>
				Projects <Laptop />
			</NavLink>
			<NavLink
				to="/terminal"
				className={({ isActive }) =>
					isActive
						? `${styles.terminal} ${styles.active}`
						: styles.terminal
				}
			>
				Terminal <SquareTerminal />
			</NavLink>
		</nav>
	);
}

export default Navbar;
