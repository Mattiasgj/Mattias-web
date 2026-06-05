import { useEffect, useState } from "react";
import styles from "./Introtext.module.css";
import Github from "../../assets/github.svg";
import MATTIAS from "../../assets/MATTIAS.svg";

type Commit = {
	message: string;
	committedDate: string;
	url: string;
	author: {
		name: string;
	};
};

function Introtext() {
	const [commits, setCommits] = useState<Commit[]>([]);

	const formatDate = (dateString: string) =>
		new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});

	useEffect(() => {
		fetch("/api/commits")
			.then((res) => res.json())
			.then((data) => setCommits(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className={styles.introtext}>
			<h2>HI, I AM</h2>
			<img src={MATTIAS} alt="mattias" />
			<p className={styles.description}>
				I'm a <span>backend</span> developer
			</p>
			<div className={styles.skills}>
				<p>C# ASP.NET Core, Node.js Express, and Python Django.</p>
				<p>
					Experience with databases such as MongoDB, MySQL, and
					PostgreSQL
				</p>
			</div>
			<div className={styles.workingOnCard}>
				<div className={styles.commitheader}>
					Check out what im working on
				</div>
				<div className={styles.commitinfo}>Latest commits:</div>

				<div className={styles.commitsWrapper}>
					{commits.map((commit) => (
						<a
							className={styles.commitcard}
							href={commit.url}
							key={commit.url}
							target="_blank"
						>
							<div className={styles.commitcardHeader}>
								<span className={styles.commitTag}>Commit</span>
								<div className={styles.commitMeta}>
									<span>{commit.author.name}</span>
									<span>
										{formatDate(commit.committedDate)}
									</span>
								</div>
							</div>
							<div className={styles.message}>
								{commit.message}
							</div>
							<div className={styles.urlwrapper}>
								<img
									src={Github}
									alt="github-logo"
									className={styles.gitlogo}
								/>
								<div className={styles.url}>
									View commit on GitHub
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default Introtext;
