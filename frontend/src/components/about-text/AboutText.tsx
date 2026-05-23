import styles from "./About.module.css";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import { Mail } from "lucide-react";
import MattiasLogo from "../../assets/MATTIAS.svg";

function AboutText() {
	return (
		<div className={styles.about}>
			<img className={styles.logo} src={MattiasLogo} alt="MATTIAS" />
			<p className={styles.text}>
				Hi my name is Mattias, i'm a computer science student and a
				(aspiring) <span>backend</span> and <span>full-stack</span>{" "}
				developer. From my personal projects and course work i have
				experience in <span>C# ASP.NET</span>,
				<span> Node.js Express</span>, and <span>Python Django</span>{" "}
				for backend development and <span>React</span> for frontend
				development. When im not coding i like to produce (and listen
				to) music, or play video games. I currently live in Malmö,
				Sweden.
			</p>
			<div className={styles.links}>
				<div className={styles.linkstitle}>Useful Links</div>
				<div className={styles.linkscontainer}>
					<a href="https://www.linkedin.com/in/mattias-gil-johansson-2053b4212/">
						<img
							className={styles.logos}
							src={LinkedIn}
							alt="LinkedIn"
						/>
					</a>
					<a href="https://github.com/mattiasgj">
						<img
							className={styles.logos}
							src={Github}
							alt="GitHub"
						/>
					</a>
					<a href="mailto:gillm7623@gmail.com">
						<Mail className={styles.logos} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutText;
