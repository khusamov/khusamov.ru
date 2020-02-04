export interface IRepository {
	name: string;
	description: string;
}

export default async function getRepositoryList(userName: string): Promise<IRepository[]> {
	const url = `https://api.github.com/users/${userName}/repos`;
	const response = await fetch(url);

	const limit = response.headers.get('X-RateLimit-Limit');
	const remaining = response.headers.get('X-RateLimit-Remaining');
	const reset = response.headers.get('X-RateLimit-Reset');

	console.group('github rate-limiting');
	console.log('https://developer.github.com/v3/#rate-limiting');
	console.log('X-RateLimit-Limit', limit);
	console.log('X-RateLimit-Remaining', remaining);
	console.log('X-RateLimit-Reset:', new Date(Number(reset) * 1000));
	console.groupEnd();

	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return response.json();
}
