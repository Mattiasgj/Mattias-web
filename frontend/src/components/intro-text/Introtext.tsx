import styles from "./Introtext.module.css";

function Introtext() {
	return (
		<div className={styles.introtext}>
			<h2>HI, I AM</h2>
			<h1>Mattias</h1>
			<p>
				I am a <span>backend</span> developer
			</p>
		</div>
	);
}

export default Introtext;
