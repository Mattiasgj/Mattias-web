import express from "express";
import commitsRouter from "./routes/commitRouter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
	path: "./.env",
});

const server = express();

server.use(express.json());
server.use(cors());

// Routes
server.use("/api", commitsRouter);

server.listen(3000, () => {
	console.log("server running on port 3000");
});
