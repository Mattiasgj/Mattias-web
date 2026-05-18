import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { TerminalPage } from "./pages/Terminal";
import "./layouts/index.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/terminal" element={<TerminalPage />} />
			</Routes>
		</Router>
	);
}

export default App;
