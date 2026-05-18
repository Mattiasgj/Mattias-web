import Navbar from "../components/navbar/Navbar.tsx";
import "../layouts/terminal.css";
import { Terminal } from "../components/terminal/Terminal.tsx";

export function TerminalPage() {
	return (
		<div className="terminal-grid">
			<Navbar></Navbar>
			<Terminal></Terminal>
		</div>
	);
}
