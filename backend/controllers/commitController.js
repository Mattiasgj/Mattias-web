import { getRecentCommits } from "../services/fetchGithub.js";

let cache = null;
let cacheTime = 0;

const CACHE_DURATION = 120000;

export async function fetchCommitsController(req, res) {
	try {
		const now = Date.now();

		if (cache && now - cacheTime < CACHE_DURATION) {
			return res.status(200).json(cache);
		}

		const result = await getRecentCommits();

		const repositories = result.data.viewer.repositories.nodes;

		const commitsRepo = repositories.map((repo) => {
			return repo.defaultBranchRef.target.history.nodes;
		});

		const commits = commitsRepo.flat();

		cache = commits;
		cacheTime = now;

		return res.status(200).json(commits);
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
}
