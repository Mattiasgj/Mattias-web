import styles from "./Terminal.module.css";
import { SquareTerminal } from "lucide-react";

export function Terminal() {
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
				<div className={styles.commandline}>
					<span>C:\Users\gillm&gt;</span>
					<input type="text" />
				</div>
			</div>
		</div>
	);
}
