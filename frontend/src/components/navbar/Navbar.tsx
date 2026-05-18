import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Mail, Laptop, Link2, Book } from "lucide-react";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.name} to="/">
				Mattias Gil Johansson
			</Link>
			<Link to="/education">
				Education <Book size={16} />
			</Link>
			<Link to="/projects">
				Projects <Laptop size={16} />
			</Link>
			<Link to="/contact">
				Contact Me <Mail size={16} />
			</Link>
			<Link to="https://github.com/Mattiasgj">
				Github <Link2 size={16} />
			</Link>
		</nav>
	);
}

export default Navbar;
