export async function load() {
	const posts = [];

	const modules = import.meta.glob('./posts/**/+page.md', { eager: false });

	for (const [path, resolver] of Object.entries(modules)) {
		const match = path.match(/\.\/(.+?)\/\+page\.md$/);
		if (match) {
			const slug = match[1];

			const post = await resolver();

			posts.push({
				slug,
				title: post.metadata?.title || slug,
				description: post.metadata?.description || '',
				date: post.metadata?.date || '',
				...post.metadata,
			});
		}
	}

	posts.sort((a, b) => {
		if (!a.date || !b.date) return 0;
		return new Date(b.date) - new Date(a.date);
	});

	return {
		posts,
	};
}
