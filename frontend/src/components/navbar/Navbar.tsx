import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Mail, Laptop, Book, SquareTerminal } from "lucide-react";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.name} to="/">
				Mattias Gil Johansson
			</Link>
			<Link className={styles.nameSmall} to="/">
				Mattias
			</Link>
			<Link to="/about">
				About <Book />
			</Link>
			<Link to="/projects">
				Projects <Laptop />
			</Link>
			<Link to="/terminal" className={styles.terminal}>
				Terminal <SquareTerminal />
			</Link>
		</nav>
	);
}

export default Navbar;
