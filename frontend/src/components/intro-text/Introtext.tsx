import styles from "./Introtext.module.css";

function Introtext() {
	return (
		<div className={styles.introtext}>
			<h2>HI, I AM</h2>
			<h1>Mattias</h1>
			<p className={styles.description}>
				I'm a <span>backend</span> developer
			</p>
			<p className={styles.details}>
				I specialize in building backend systems and APIs using C#
				ASP.NET Core, Node.js Express, and Python Django. I have
				experience with databases such as MongoDB, MySQL, and PostgreSQL
				I am passionate about writing clean, efficient, and scalable
				code.
			</p>
		</div>
	);
}

export default Introtext;
