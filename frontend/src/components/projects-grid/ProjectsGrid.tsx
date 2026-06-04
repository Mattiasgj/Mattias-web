import styles from "./ProjectsGrid.module.css";

function ProjectsGrid() {
	return (
		<div className={styles.projectsGrid}>
			<div className={styles.projectsContainer}>
				<h1>Projects</h1>
				<div className={styles.projects}>
					<a
						href="https://github.com/Mattiasgj/Mattias-web"
						className={styles.projectCard}
						target="_blank"
					>
						<div className={styles.imgContainer}>
							<img src="./src/assets/MATTIAS.svg" alt="Mattias" />
						</div>
						<div className={styles.projectCardText}>
							Mattias-Web
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectsGrid;
