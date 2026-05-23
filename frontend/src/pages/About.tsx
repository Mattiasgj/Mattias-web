import Navbar from "../components/navbar/Navbar.tsx";
import AboutText from "../components/about-text/AboutText.tsx";
import "../layouts/about.css";

export function About() {
	return (
		<div className="about-grid">
			<Navbar />
			<AboutText />
		</div>
	);
}
