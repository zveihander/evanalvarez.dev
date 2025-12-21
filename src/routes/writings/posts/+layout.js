export async function load({ data, url }) {
	// Get the post name from the URL path
	const pathParts = url.pathname.split('/');
	const slug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];

	return {
		...data,
		slug
	};
}
