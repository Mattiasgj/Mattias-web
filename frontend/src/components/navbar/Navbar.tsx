import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Mail, Laptop, Link2, Book, SquareTerminal } from "lucide-react";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.name} to="/">
				Mattias Gil Johansson
			</Link>
			<Link to="/terminal">
				Terminal <SquareTerminal />
			</Link>
			<Link to="/education">
				Education <Book />
			</Link>
			<Link to="/projects">
				Projects <Laptop />
			</Link>
			<Link to="/contact">
				Contact Me <Mail />
			</Link>
			<Link to="https://github.com/Mattiasgj">
				Github <Link2 />
			</Link>
		</nav>
	);
}

export default Navbar;
