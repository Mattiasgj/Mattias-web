import Navbar from "../components/navbar/Navbar.tsx";
import Introtext from "../components/intro-text/Introtext.tsx";
import Codeimg from "../components/intro-img/Codeimg.tsx";
import "../layouts/home.css";

export function Home() {
	return (
		<div className="home-grid">
			<Navbar></Navbar>
			<Introtext></Introtext>
			<Codeimg></Codeimg>
		</div>
	);
}
