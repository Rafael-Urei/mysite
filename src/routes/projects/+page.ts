export async function load({ fetch }) {
	const res = await fetch(
		'https://gist.githubusercontent.com/Rafael-Urei/94b6c4de4a94e10d2696ff3d4f438a2c/raw/d12139d3f79d5b7184a96a00cb12ae8304f9b32d/projects.json'
	);
	const projects = await res.json();

	const sortedProjects = projects.sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		}

		if (a.title > b.title) {
			return 1;
		}

		return 0;
	});

	return {
		sortedProjects
	};
}
