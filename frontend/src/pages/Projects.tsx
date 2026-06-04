import Navbar from "../components/navbar/Navbar.tsx";
import ProjectsGrid from "../components/projects-grid/ProjectsGrid.tsx";
import "../layouts/projects.css";

export function Projects() {
	return (
		<div className="projects-grid">
			<Navbar />
			<ProjectsGrid />
		</div>
	);
}
