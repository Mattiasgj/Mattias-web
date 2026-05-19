import styles from "./Terminal.module.css";
import { SquareTerminal } from "lucide-react";
import { useState } from "react";

export function Terminal() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	return (
		<div className={styles.wrapper}>
			<div className={styles.topbar}>
				<SquareTerminal />
				Terminal
			</div>
			<div className={styles.terminal}>
				<p>
					Mattias [Version 10.0.19045.7291] (c) MGJ Corporation.
					<br />
					All rights reserved.
				</p>
				<p>Type 'help' for a list of commands.</p>
				<div className={styles.commandline}>
					<span>C:\Users\gillm&gt;</span>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setOutput("output");
								setInput("");
							}
						}}
					/>
				</div>
				<div className={styles.output}>{output}</div>
			</div>
		</div>
	);
}
